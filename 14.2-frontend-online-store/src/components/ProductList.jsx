import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    const { title, thumbnail, price } = products;
    return (
      <div id="product-card">
        <h3 data-testid="product">
          {`${title}`}
        </h3>
        <img data-testid="product" src={ thumbnail } alt={ title } />
        <p data-testid="product">
          {`R$ ${price}`}
        </p>
      </div>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default ProductList;
