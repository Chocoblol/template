import React from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';

import './ListGroup.scss';

const ListGroup = React.forwardRef(({className, children, tag: Tag, ...attrs }, ref) => {
  
  const classes = ClassName(
    'list-group',
    className
  );
  
  return (
    <Tag className={classes} {...attrs} ref={ref}>
      {children}
    </Tag>
  );
});

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

ListGroup.defaultProps = {
  children: null,
  className: '',
  tag: 'ul',
};

export default ListGroup;
