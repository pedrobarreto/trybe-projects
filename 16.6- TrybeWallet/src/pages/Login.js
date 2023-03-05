import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.emailSubmit = this.emailSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleEmailChange(event) {
    if (event.target.value !== undefined) {
      this.setState({ email: event.target.value });
    }
  }

  handlePasswordChange(event) {
    if (event.target.value !== undefined) {
      this.setState({ password: event.target.value });
    }
  }

  // regex de validação de email
  // https://www.w3resource.com/javascript/form/email-validation.php
  validateEmail(email) {
    const validMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return validMail.test(String(email).toLowerCase());
  }

  emailSubmit() {
    const { email } = this.state;
    const { history, emailDispatch } = this.props;
    emailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { password, email } = this.state;
    const validPassword = 6;
    const validEmail = this.validateEmail(email);
    const enabled = password.length >= validPassword && validEmail;
    return (
      <div>
        Login
        <input
          name="email"
          type="email"
          onChange={ this.handleEmailChange }
          data-testid="email-input"
        />
        <input
          name="password"
          type="password"
          onChange={ this.handlePasswordChange }
          data-testid="password-input"
        />
        <button
          type="submit"
          disabled={ !enabled }
          onClick={ this.emailSubmit }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
