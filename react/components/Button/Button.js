import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';


const Button = ({children, onClick, className, disabled, active, ...attrs}) => {

  const classes = classNames(
    'btn',
    className,
    {active}
  );

  const onClickHandler = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag 
      className={classes}
      disabled={disabled}
      onClick={e => onClickHandler.call(this, e)}
      {...attrs}
      tabIndex="0"
    >{children}</Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultprops = {
  children: 'Button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;