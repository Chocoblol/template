import React, {useState} from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';

import './Tooltip.scss';

const Tooltip = ({children, content, className, style, position, ...attrs}) => {
  const [isShow, setShow] = useState(false);

  const classes = ClassName(
    'tooltip',
    className,
    { position }
  );

  const show = () => {
    setShow(true)
  };

  const hide = () => {
    setShow(false)
  };

  return(
    <span className="tooltip__wrapper">
      { isShow && <span style={style} className={classes} {...attrs} >{content}</span> } 
      <span className="tooltip__target" onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.string,
  position: PropTypes.oneOf([
    'top', 'right', 'bottom', 'left'
  ]),
  style: PropTypes.objectOf(PropTypes.string)
};

Tooltip.defaultProps = {
  children: '',
  content: 'Tolltip',
  className: '',
  position: 'top'
};


export default Tooltip;
