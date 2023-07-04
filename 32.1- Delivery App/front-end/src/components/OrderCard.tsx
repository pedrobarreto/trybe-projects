import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderCard.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

function OrderCard({
  order: {
    id,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  }, required, path }) {
  return (
    <section className="orders">
      <Link to={ `${required}${id}` }>
        <div className="order-card">
          <div
            className="order-id"
            data-testid={ `${path}_orders__element-order-id-${id}` }
          >
            <h3>{ `Pedido ${id}` }</h3>
          </div>
          <div className="order-status">
            <h3 data-testid={ `${path}_orders__element-delivery-status-${id}` }>
              {status}
            </h3>
          </div>
          <div className="order-details">
            <h3 data-testid={ `${path}_orders__element-order-date-${id}` }>
              { moment(saleDate).format('DD/MM/YYYY') }
            </h3>
            <h3 data-testid={ `${path}_orders__element-card-price-${id}` }>
              R$
              { totalPrice.replace('.', ',') }
            </h3>
          </div>
          <div className="order-address">
            <h3 data-testid={ `${path}_orders__element-card-address-${id}` }>
              { `${deliveryAddress}, ${deliveryNumber} ` }
            </h3>
          </div>
        </div>
      </Link>
    </section>
  );
}

OrderCard.propTypes = {
  required: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
