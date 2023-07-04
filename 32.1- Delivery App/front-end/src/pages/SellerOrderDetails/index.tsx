import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import NavBarSeller from '../../components/NavBarSeller';
import OrderDetailsSeller from '../../components/OrderDetailsSeller';
import { request } from '../../services/requests';
import DeliveryContext from '../../context/DeliveryContext';

function SellerOrderDetails({ match }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { sale } = useContext(DeliveryContext);

  useEffect(() => {
    async function fetchData() {
      const endpoint = '/orders';
      const response = await request(endpoint, { saleId: +match.params.id }, 'post');
      setOrders(response);
      setLoading(false);
    }
    fetchData();
  }, [match.params.id]);

  return (
    <>
      <NavBarSeller />
      { !loading ? (
        <OrderDetailsSeller
          orders={ orders[0] }
          // seller={ sale.sellerName }
          products={ orders[0].products }
          path="seller"
        />
      ) : (
        <h2> Carregando ...</h2>
      )}

    </>
  );
}

SellerOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SellerOrderDetails;
