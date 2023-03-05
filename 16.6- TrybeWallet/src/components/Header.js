import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.expensesMath = this.expensesMath.bind(this);
  }

  expensesMath() {
    const { wallet } = this.props;
    const { expenses } = wallet;
    return expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + value * exchangeRates[currency].ask), 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{this.expensesMath()}</p>
        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  }),
};

Header.defaultProps = {
  email: 'xablau@trybe.com',
  wallet: {},
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
