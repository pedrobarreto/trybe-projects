// import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import DeliveryContext from '../context/DeliveryContext';
// import { request, setToken } from '../services/requests';
// import '../styles/FormAddressCheckout.css';

// function FormAdressCheckout() {
//   const [arrSellers, setArrSellers] = useState(null);
//   const [seller, setSeller] = useState(null);
//   const [deliveryAddress, setAddress] = useState('');
//   const [deliveryNumber, setNumAddress] = useState('');
//   const [cartData, setCartData] = useState(null);
//   const [getToken, setGetToken] = useState(null);
//   const { setSale } = useContext(DeliveryContext);

//   const history = useHistory();

//   const fetchSellers = async () => {
//     const endpoint = '/role';
//     const ans = await request(endpoint, {}, 'get');
//     setArrSellers(ans);
//   };

//   useEffect(() => {
//     fetchSellers();
//   }, []);

//   const calcTotal = (arrCart) => {
//     let ctotal = 0;
//     arrCart.map((item) => {
//       ctotal += item.price * item.quantity;
//       return ctotal;
//     });
//     return ctotal;
//   };

//   const getLocalStorage = () => {
//     const itens = localStorage.getItem('carrinho');
//     const user = localStorage.getItem('user');
//     const infoCart = JSON.parse(itens);
//     const userData = JSON.parse(user);
//     setGetToken(userData.token);
//     const totalPrice = calcTotal(infoCart).toFixed(2);
//     setCartData({ cartList: [...infoCart], userId: userData.id, totalPrice });
//   };

//   useEffect(() => {
//     getLocalStorage();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const postOrder = async () => {
//     const endpoint = '/sales';
//     setToken(getToken);
//     const { newSale } = await request(endpoint,
//       { deliveryAddress,
//         deliveryNumber,
//         sellerId: seller,
//         status: 'Pendente',
//         ...cartData }, 'post');
//     setSale({ saleId: newSale.id, sellerName: arrSellers[0].name });
//     history.push(`/customer/orders/${newSale.id}`);
//   };

//   return (
//     <div className="from-adress-checkout">
//       <div className="from-adress-checkout-title">
//         <h2>Detalhes e Endereço para Entrega</h2>
//       </div>
//       <form className="from-adress-checkout-content">
//         <select
//           data-testid="customer_checkout__select-seller"
//           onChange={ ({ target }) => setSeller(target.value) }
//         >
//           P. Vendedora Responsável
//           <option value="">Selecione um vendedor</option>
//           { arrSellers && arrSellers.map((element) => (
//             <option key={ element.id } value={ element.id }>
//               { element.name }
//             </option>
//           )) }
//         </select>
//         <div className="from-adress-checkout-content-input">
//           <label htmlFor="address">
//             Endereço
//             <input
//               data-testid="customer_checkout__input-address"
//               id="address"
//               onChange={ ({ target }) => setAddress(target.value) }
//               type="text"
//             />
//           </label>
//         </div>
//         <div className="from-adress-checkout-content-input">
//           <label htmlFor="number">
//             Número
//             <input
//               id="number"
//               data-testid="customer_checkout__input-addressNumber"
//               onChange={ ({ target }) => setNumAddress(target.value) }
//               type="text"
//             />
//           </label>
//         </div>
//       </form>
//       <div>
//         <button
//           className="from-adress-checkout-btn"
//           data-testid="customer_checkout__button-submit-order"
//           type="button"
//           onClick={ postOrder }
//         >
//           FINALIZAR PEDIDO
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FormAdressCheckout;
