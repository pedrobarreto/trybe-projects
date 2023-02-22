import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    return this.handleUser();
  }

  handleUser = async () => {
    const response = await getUser();
    const { name } = response;
    this.setState({ name });
    this.setState({ isLoading: true });
  };

  render() {
    const { name, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/search" data-testid="link-to-search"> Search </Link>
        <Link to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
        <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
        {isLoading ? (
          <p data-testid="header-user-name">
            {' '}
            { name }
            {' '}
          </p>
        ) : (
          <Loading />
        )}
      </header>
    );
  }
}
export default Header;
