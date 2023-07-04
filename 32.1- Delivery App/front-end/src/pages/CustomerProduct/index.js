import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from '../../services/requests';
import NavBarCustomer from '../../components/NavBarCustomer';
import ProductCard from '../../components/ProductCard';
import DeliveryContext from '../../context/DeliveryContext';

const getAllProducts = async () => {
  const endpoint = '/products';
  const rawData = await request(endpoint, {}, 'get');
  const response = rawData.reduce((acc, valor, index) => {
    acc[index] = { ...valor, quantity: 0 };
    return acc;
  }, []);
  return response;
};

function CustomerProduct() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const { cart, setCart, newItem, setNewCart } = useContext(DeliveryContext);
  const history = useHistory();

  const saveCartLocalStorage = (listCart) => {
    localStorage.setItem('carrinho', JSON.stringify(listCart));
  };

  useEffect(() => {
    async function fetchData() {
      const apiAnswer = await getAllProducts();
      setProducts(apiAnswer);
    }
    fetchData();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculatePrice = () => {
    const calcPrice = products.reduce((acc, valor) => {
      acc += valor.price * valor.quantity;
      return acc;
    }, 0);
    setPrice(calcPrice.toFixed(2));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createCart = async () => {
    if (newItem) {
      const product = products.find((element) => element.name === newItem.name);
      product.quantity = newItem.quantity;
      await setCart(products);
    }
  };

  const buildCart = () => {
    const listCart = cart.filter((product) => product.quantity > 0);
    console.log(listCart);
    setNewCart(listCart);
    saveCartLocalStorage(listCart);
    history.push('/customer/checkout'); // rota do checkout
  };

  useEffect(() => {
    createCart();
    calculatePrice();
  }, [calculatePrice, createCart, newItem]);

  return (
    <>
      <NavBarCustomer />
      <div className="products-container">
        { products.map((product, index) => (
          <ProductCard key={ index } { ...product } number={ index } />
        )) }
      </div>
      <div className="products-sidebar">
        <button
          data-testid="customer_products__button-cart"
          disabled={ price === '0.00' }
          // disabled={ true}
          onClick={ buildCart }
          className="cart"
          type="button"
        >
          Ver carrinho:
          R$
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { price && price.replace(/\./, ',')}
          </span>

        </button>
      </div>
    </>
  );
}
export default CustomerProduct;
