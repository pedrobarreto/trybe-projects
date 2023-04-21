import PropTypes from 'prop-types';
import React from 'react';
import StarwarsContext from './StarwarsContext';
import fetchStarwarsAPI from '../services/StarwarsAPI';

class StarwarsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      comparison: 'maior que',
      columnsArray: ['population', 'orbital_period',
        'diameter', 'rotation_period', 'surface_water'],
      filteredColumn: '',
      value: 0,
      data: [],
      isFetching: false,
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };
    this.getAPI = this.getAPI.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilteredData = this.handleFilteredData.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  handleFilteredData(column) {
    const { columnsArray } = this.state;
    const filtered = columnsArray
      .filter((element) => !column.includes(element));
    this.setState({ columnsArray: filtered });
    this.setState({ filteredColumn: column });
  }

  handleChangeName(e) {
    const { rawData, filters } = this.state;
    if (e.target.value !== undefined) {
      this.setState({ filters: { ...filters, filterByName: { name: e.target.value } } });
      const filtered = rawData.filter((element) => (
        element.name.includes(e.target.value)));
      this.setState({ data: filtered });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'filterByNumericValues') { this.setState({ value }); }
    if (name === 'comparison') { this.setState({ comparison: value }); }
  }

  handleClick() {
    const elementById = document.getElementById('column');
    const selectedColumn = elementById.options[elementById.selectedIndex].value;

    const { filters, comparison, value, data } = this.state;
    this.setState({
      filters: {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column: selectedColumn,
            comparison,
            value,
          },
        ],
      },
    });

    const filtered = data
      .filter((element) => {
        switch (comparison) {
        case 'maior que':
          return Number(element[selectedColumn]) > Number(value);
        case 'menor que':
          return Number(element[selectedColumn]) < Number(value);
        case 'igual a':
          return Number(element[selectedColumn]) === Number(value);
        default:
          return element;
        }
      });
    this.setState({ data: filtered });
    this.handleFilteredData(selectedColumn);
  }

  getAPI() {
    this.setState({ isFetching: true }, async () => {
      const { results } = await fetchStarwarsAPI();
      this.setState({ data: results });
      this.setState({ rawData: results });
      this.setState({ isFetching: false });
    });
  }

  removeFilter(e) {
    const { filters, columnsArray, rawData } = this.state;
    this.setState({
      filters: {
        ...filters,
        filterByNumericValues:
        filters.filterByNumericValues.filter(({ column }) => column !== e.target.name),
      },
    });
    this.setState({ columnsArray: [e.target.name, ...columnsArray] });
    this.setState({ data: rawData });
  }

  render() {
    const { children } = this.props;
    return (
      <StarwarsContext.Provider
        value={ {
          ...this.state,
          handleChangeName: this.handleChangeName,
          handleChange: this.handleChange,
          handleClick: this.handleClick,
          removeFilter: this.removeFilter,
        } }
      >
        {children}
      </StarwarsContext.Provider>

    );
  }
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
