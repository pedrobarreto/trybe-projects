// import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import HandleQuantity from './HandleQuantity';
// import DeliveryContext from '../context/DeliveryContext';
// import '../styles/ProductCard.css';

// function ProductCard({ id, price, name, url_image: urlImage, quantity }) {
//   const [itemCart, setItem] = useState({ id, name, price, quantity });
//   const { setNewItem } = useContext(DeliveryContext);

//   const addQuantity = async () => {
//     setItem({ id, name, price, quantity: itemCart.quantity + 1 });
//     setNewItem({ id, name, price, quantity: itemCart.quantity + 1 });
//     return itemCart;
//   };

//   const insertQuantity = async (event) => {
//     setItem({ id, name, price, quantity: event.target.value });
//     setNewItem({ id, name, price, quantity: event.target.value });
//     return itemCart;
//   };

//   const removeQuantity = async () => {
//     // https://stackoverflow.com/questions/53986315/how-to-prevent-state-increment-decrement-counter-going-below-1
//     setItem({ id, name, price, quantity: Math.max(0, itemCart.quantity - 1) });
//     setNewItem({ id, name, price, quantity: Math.max(0, itemCart.quantity - 1) });
//     return itemCart;
//   };
//   return (
//     <div className="product-card">
//       <div className="product-card-price">
//         <h3>R$</h3>
//         <h3 data-testid={ `customer_products__element-card-price-${id}` }>
//           {price.replace(/\./, ',')}
//           {/* função replace do price retirada do teste */}
//         </h3>
//       </div>
//       <div
//         className="product-card-image"
//       >
//         <img
//           data-testid={ `customer_products__img-card-bg-image-${id}` }
//           src={ urlImage }
//           width="130"
//           alt={ name }
//         />
//       </div>
//       <div>
//         <div
//           className="product-card-name"
//           data-testid={ `customer_products__element-card-title-${id}` }
//         >
//           <h3>{ name }</h3>
//         </div>
//         <HandleQuantity
//           id={ id }
//           quantity={ itemCart.quantity }
//           addQuantity={ addQuantity }
//           decreaseQuantity={ removeQuantity }
//           insertQuantity={ insertQuantity }
//         />
//       </div>
//     </div>
//   );
// }

// ProductCard.propTypes = {
//   quantity: PropTypes.number.isRequired,
//   price: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   url_image: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

// export default ProductCard;
