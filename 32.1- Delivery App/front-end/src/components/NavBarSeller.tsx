import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/NavBarSeller.css';
import Header from './Header';

function NavBarSeller() {
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
            className={ window.location.pathname === '/seller/orders' ? 'active' : '' }
            to="/seller/orders"
          >
            PEDIDOS
          </Link>
          <button
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

export default NavBarSeller;
