// import React, { useEffect, useState } from 'react';
// import '../styles/CartList.css';

// function CartList() {
//   const [itensCart, setItensCart] = useState([]);
//   const [subTotal, setSubtotal] = useState(0);
//   const [total, setTotal] = useState(0);

//   const getItens = () => {
//     const itens = localStorage.getItem('carrinho');
//     const ans = JSON.parse(itens);
//     setItensCart(ans);
//   };
//   useEffect(() => {
//     getItens();
//   }, []);

//   const calcTotal = () => {
//     let ctotal = 0;
//     itensCart.map((item) => {
//       ctotal += item.price * item.quantity;
//       return ctotal;
//     });
//     setTotal(ctotal.toFixed(2));
//   };

//   const calcSubTotal = () => {
//     const sum = itensCart.reduce((acc, value) => {
//       acc[value.name] = ((value.quantity * value.price).toFixed(2).replace(/\./, ','));
//       return acc;
//     }, {});
//     setSubtotal(sum);
//   };

//   useEffect(() => {
//     calcSubTotal();
//     calcTotal();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [itensCart]);

//   const removeItem = (item) => {
//     const newItens = itensCart.filter((i) => i.id !== item.id);
//     setItensCart(newItens);
//   };

//   return (
//     <div className="cart-list-background">
//       <div className="cart-list-title">
//         <h2> Finalizar Pedido </h2>
//       </div>
//       <div className="cart-list-container">
//         {itensCart && itensCart.map((item, index) => (
//           <div className="cart-list-content-item" key={ index }>
//             <div className="cart-list-content-item-number">
//               <span
//                 data-testid={
//                   `customer_checkout__element-order-table-item-number-${index}`
//                 }
//               >
//                 { index + 1}
//               </span>
//             </div>
//             <div
//               className="cart-list-content-item-name"
//               data-testid={ `customer_checkout__element-order-table-name-${index}` }
//             >
//               <span>{ item.name }</span>
//             </div>
//             <div
//               className="cart-list-content-item-quantitiy"
//             >
//               <span
//                 data-testid={
//                   `customer_checkout__element-order-table-quantity-${index}`
//                 }
//               >
//                 { item.quantity }

//               </span>
//             </div>
//             <div
//               className="cart-list-content-item-price"
//             >
//               <span
//                 data-testid={
//                   `customer_checkout__element-order-table-unit-price-${index}`
//                 }
//               >
//                 { item.price.replace(/\./, ',') }

//               </span>
//             </div>
//             <div
//               className="cart-list-content-item-subtotal"
//               data-testid={
//                 `customer_checkout__element-order-table-sub-total-${index}`
//               }
//             >
//               <span>{ subTotal && subTotal[item.name] }</span>
//             </div>
//             <button
//               className="remove-btb"
//               data-testid={ `customer_checkout__element-order-table-remove-${index}` }
//               type="button"
//               onClick={ () => removeItem(item) }
//             >
//               Remover
//             </button>
//           </div>
//         )) }
//       </div>
//       <div
//         className="total-price"
//       >
//         <h2>Total: R$</h2>
//         <h2
//           data-testid="customer_checkout__element-order-total-price"
//         >
//           { total && total.replace(/\./, ',') }

//         </h2>
//       </div>
//     </div>
//   );
// }
// export default CartList;
