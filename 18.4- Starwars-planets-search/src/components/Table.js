import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function mappingBody(element) {
  return element.map(([key, value]) => (
    key !== 'residents'
    && (
      <td key={ key }>
        {value}
      </td>
    )
  ));
}

function mappingHeader(element) {
  return element.map((key) => (
    key !== 'residents'
     && (
       <th key={ key }>
         {key}
       </th>
     )
  ));
}

function Table() {
  const { isFetching, data, filters, removeFilter } = useContext(StarwarsContext);

  function filterHeader() {
    return (
      <div>
        { filters.filterByNumericValues.map(
          ({ column, comparison, value }, i) => (
            <span data-testid="filter" key={ i }>
              <h3>{`${column} ${comparison} ${value}`}</h3>
              <button
                type="button"
                id="filter"
                onClick={ removeFilter }
                name={ column }
              >
                X
              </button>
            </span>
          ),
        )}
      </div>
    );
  }

  return !isFetching ? (
    <section id="table-elements">
      { filterHeader()}
      <table>
        <thead>
          <tr>
            { data[0]
            && mappingHeader(Object.keys(data[0])) }
          </tr>
        </thead>
        <tbody>

          {data
            .map((element, i) => (
              <tr key={ i }>
                {mappingBody(Object.entries(element))}
              </tr>
            ))}

        </tbody>
      </table>
    </section>
  ) : <span>Carregando...</span>;
}

export default Table;
