import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/NavBarCustomer.css';
import Header from './Header';

function NavBarCustomer() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    history.push('/');
  };

  return (
    <>
      <Header />
      <nav>
        <div className="links">
          <Link
            data-testid="customer_products__element-navbar-link-products"
            className={
              window.location.pathname === '/customer/products' ? 'active' : ''
            }
            to="/customer/products"
          >
            PRODUTOS
          </Link>
          <Link
            data-testid="customer_products__element-navbar-link-orders"
            className={ window.location.pathname === '/customer/orders' ? 'active' : '' }
            to="/customer/orders"
          >
            MEUS PEDIDOS
          </Link>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => handleLogout() }
            type="button"
          >
            SAIR
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBarCustomer;
