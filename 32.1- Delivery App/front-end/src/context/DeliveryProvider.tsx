// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import DeliveryContext from './DeliveryContext';

// const { Provider } = DeliveryContext;

// function DeliveryProvider({ children }) {
//   const [delivery, setDelivery] = useState(null);
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState(null);
//   const [newItem, setNewItem] = useState(null);
//   const [newCart, setNewCart] = useState(null);
//   const [sale, setSale] = useState({ saleId: 0, sellerName: '' });

//   const value = {
//     delivery,
//     setDelivery,
//     user,
//     setUser,
//     cart,
//     setCart,
//     newItem,
//     setNewItem,
//     newCart,
//     setNewCart,
//     sale,
//     setSale,
//   };

//   return (
//     <Provider value={ value }>
//       { children }
//     </Provider>
//   );
// }

// DeliveryProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default DeliveryProvider;
