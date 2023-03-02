import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchedTerm: '',
      categories: [],
      products: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleQueryChange = (event) => {
    if (event.target.value !== undefined) {
      this.setState({ searchedTerm: event.target.value });
    }
  };

  fetchAPI = async () => {
    const result = await getCategories();
    this.setState({ categories: result });
  };

  fetchProducts = async (event) => {
    const id = event.target.name;
    const { searchedTerm } = this.state;
    const results = await getProductsFromCategoryAndQuery(id, searchedTerm);
    this.setState({ products: results });
  };

  sidebar() {
    const { categories } = this.state;
    return (
      <div id="sidebar">
        <div className="shopping-cart">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </Link>
        </div>
        { categories.map(({ id, name }) => (
          <input
            key={ id }
            name={ id }
            type="button"
            value={ name }
            data-testid="category"
            onClick={ this.fetchProducts }
          />
        )) }
      </div>
    );
  }

  products() {
    const { products } = this.state;
    return (
      <section id="product-list">
        { products.results !== undefined && products.results.length > 0 ? (
          products.results.map((product) => (
            <ProductList key={ product.id } products={ product } />
          ))
        )
          : (<p>Nenhum produto foi encontrado</p>) }
      </section>
    );
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <h2 className="search-msg">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <form>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleQueryChange }
          />
          <input
            type="button"
            value="Buscar"
            data-testid="query-button"
            onClick={ this.fetchProducts }
          />
        </form>
        {this.sidebar()}
        {this.products()}
      </div>
    );
  }
}
export default Home;
