import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
    };
  }

  handleNameChange = (event) => {
    if (event.target.value !== undefined) {
      this.setState({ name: event.target.value });
    }
  };

  handleUser = async () => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    const { name } = this.state;
    await createUser({
      name,
    });
    history.push('/search');
  };

  render() {
    const { name, isLoading } = this.state;
    const validName = 3;
    const enabled = name.length >= validName;
    return (
      <div data-testid="page-login">
        <h1> Login </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <form>
            <input
              type="text"
              data-testid="login-name-input"
              onChange={ this.handleNameChange }
            />
            <input
              type="button"
              value="Entrar"
              data-testid="login-submit-button"
              disabled={ !enabled }
              onClick={ this.handleUser }
            />
          </form>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
