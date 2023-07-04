import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { request } from '../../services/requests';
import RegisterInput from './RegisterInput';
import DeliveryContext from '../../context/DeliveryContext';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const { setUser } = useContext(DeliveryContext);
  const history = useHistory();

  const saveLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const validateName = () => {
    const MIN_NAME_LENGTH = 12;
    return fullName.length >= MIN_NAME_LENGTH;
  };

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length >= MIN_PASSWORD;
  };

  const register = async (event) => {
    event.preventDefault();
    const endpoint = '/register';
    const response = await request(endpoint,
      { name: fullName, email, password, role: 'customer' }, 'post');
    if (response.message) {
      toast.error(response.message);
    }
    // setUser(response);
    saveLocalStorage(response);
    if (!response.message) {
      history.push('/customer/products');
    }
  };

  return (
    <div className="login-background">
      <h1>Faça seu Cadastro!</h1>
      <form className="register-form">
        <RegisterInput
          name="name"
          onChange={ ({ target }) => setFullName(target.value) }
          value={ fullName }
        />
        <RegisterInput
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <RegisterInput
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <button
          className="register-button"
          data-testid="common_register__button-register"
          disabled={ !validateEmail() || !validatePassword() || !validateName() }
          onClick={ (event) => register(event) }
          type="submit"
        >
          CADASTRAR
        </button>
        <div data-testid="common_register__element-invalid_register">
          <ToastContainer
            position="top-center"
          />
        </div>
      </form>
    </div>
  );
}
export default Register;
