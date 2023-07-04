import React from 'react';
import PropTypes from 'prop-types';

export default function AdminManageInput({ name, onChange, value, placeholder }) {
  return (
    <input
      className="admin-manage-input"
      data-testid={ `admin_manage__input-${name}` }
      id={ name }
      name={ name }
      onChange={ onChange }
      placeholder={ placeholder }
      type={ name }
      value={ value }
    />
  );
}

AdminManageInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
