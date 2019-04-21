import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({id, className, label, error, ...attrs}) => {

  const classes = classNames(
    'input',
    className,
    {error}
  );

  return (
    <div className="input__wrapper">
      {
        label && <span className="input__label" htmlFor={id}>{label}</span>  
      }
      {
        attrs.required && <span className="input__required">Required</span>
      }
      <input
        name={id}
        className={classes}
        tabIndex="0"
        {...attrs}
      />
      {
        error && <span className="input__error">{error}</span>
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,

};

Input.defaultProps = {
  className: '',
};

export default Input;