import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginInput from './LoginInput';
import { request } from '../../services/requests';
import 'react-toastify/dist/ReactToastify.css';

// import logo from '../../images/logo.png';
import './Login.css';
import DeliveryContext from '../../context/DeliveryContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { setUser } = useContext(DeliveryContext);
  const history = useHistory();
  // const senha = '$#zebirita#$';
  // const adm = '--adm2@21!!--';

  const saveLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  // const forgetLocalStorage = () => {
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('carrinho');
  // };

  const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length >= MIN_PASSWORD;
  };

  const verifyResponse = (response) => {
    const { role } = response;
    if (role === 'customer') return `/${role}/products`;
    if (role === 'seller') return `/${role}/orders`;
    if (role === 'administrator') return '/admin/manage';
    return false;
  };

  const login = async (event) => {
    event.preventDefault();
    const endpoint = '/login';
    const response = await request(endpoint, { email, password }, 'post');
    if (response.message) {
      toast.error(response.message);
    }
    console.log('login', response);
    // setUser(response);
    saveLocalStorage(response);
    history.push(verifyResponse(response));
  };

  useEffect(() => {
    // forgetLocalStorage();
    const user = getLocalStorage('user');
    if (user) {
      switch (user.role) {
      case 'seller': return history.push('/seller/orders');
      case 'customer': return history.push('/customer/products');
      case 'administrator': return history.push('/admin/manage');
      default: break;
      }
    }
  }, []);

  return (
    <div className="login-background">
      {/* <img alt="logo" className="logo" src={ logo } /> */}
      <form className="login-form">
        <LoginInput
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <LoginInput
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <button
          className="login-button"
          data-testid="common_login__button-login"
          disabled={ !validateEmail() || !validatePassword() }
          type="submit"
          onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        <div data-testid="common_login__element-invalid-email">
          <ToastContainer
            data-testid="common_login__element-invalid-email"
            position="top-center"
          />
        </div>
        <Link className="register-button" to="/register">
          Ainda não tenho conta
          <button
            // label="button"
            type="button"
            data-testid="common_login__button-register"
          />
        </Link>
      </form>
    </div>
  );
}

export default Login;
