import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/NavBarAdmin.css';
import Header from './Header';

function NavBarAdmin() {
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
            className={
              window.location.pathname === '/admin/manage' ? 'active' : ''
            }
            to="/admin/manage"
          >
            GERENCIAR USUÁRIOS
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

export default NavBarAdmin;
