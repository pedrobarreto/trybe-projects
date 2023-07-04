import React from 'react';
import PropTypes from 'prop-types';

import './Register.css';

export default function LoginInput({ name, onChange, value }) {
  return (
    <input
      className="register-input"
      data-testid={ `common_register__input-${name}` }
      id={ name }
      name={ name }
      onChange={ onChange }
      placeholder={ name.charAt(0).toUpperCase() + name.slice(1) }
      type={ name }
      value={ value }
    />
  );
}

LoginInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
