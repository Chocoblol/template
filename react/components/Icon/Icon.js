import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import '../../../Icomoon/style.css';
import './Icon.css';

const Icon = ({
  name, className, onClick, size, disabled, ...attrs
}) => {

  const classes = ClassNames(
    'icon',
    `icon-${name}`,
    className,
    {funct: onClick},
    {disabled},
  );

  const elemSize = size ? {fontSize: `${size}px`} : null;

  return(
    <i className={classes} onClick={disabled ? null : onClick} style={elemSize} {...attrs}>

    </i> 
  );
};

Icon.propTypes = {
  name: PropTypes.string, 
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: '', 
  className: '',
  onClick: null,  
  size: null,
  disabled: false,
};

export default Icon;