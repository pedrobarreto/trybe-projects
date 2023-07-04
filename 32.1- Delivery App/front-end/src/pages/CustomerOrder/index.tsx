import React, { useEffect } from 'react';
import NavBarCustomer from '../../components/NavBarCustomer';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function CustomerOrder() {
  const [orders, setOrders] = React.useState([]);

  const getUser = () => {
    const user = localStorage.getItem('user');
    const ans = JSON.parse(user);
    return ans;
  };

  const fetchData = async () => {
    const { id } = getUser();
    const endpoint = `/sales/user-id/${id}`;
    const response = await request(endpoint, {}, 'get');
    setOrders(response);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBarCustomer />
      { orders.map((order) => (<OrderCard
        key={ order.id }
        order={ order }
        path="customer"
        required="/customer/orders/"
      />))}
    </>
  );
}

export default CustomerOrder;
