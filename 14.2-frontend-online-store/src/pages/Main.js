import React from 'react';
import { getCategories } from '../services/api';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      fetched: false,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.showCategories = this.showCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  showCategories() {
    const { categories } = this.state;
    return categories.map((cat) => (
      <p data-testid="category" key={ cat.id }>{ cat.name }</p>));
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
      fetched: true,
    });
  }

  render() {
    const { fetched } = this.state;
    return (
      <form>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        { fetched && this.showCategories() }
      </form>
    );
  }
}

export default Main;
