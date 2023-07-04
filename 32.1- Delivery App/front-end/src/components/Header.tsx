import React, { useEffect, useState } from 'react';
// import logo from '../images/logo.png';

import '../styles/Header.css';

function Header() {
  const [userLocal, setLocal] = useState(null);

  const fetchUser = () => {
    const infoUser = localStorage.getItem('user');
    const ans = JSON.parse(infoUser);
    console.log(ans);
    setLocal(ans);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="header">
      {/* <img alt="Logo Delivery" className="logo" src={ logo } /> */}
      <span
        className="user-name"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userLocal ? userLocal.name : 'usuário' }
      </span>
    </div>
  );
}

export default Header;
