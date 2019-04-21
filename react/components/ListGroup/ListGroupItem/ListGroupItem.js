import React from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';

import './ListGroupItem.scss';

const ListGroupItem = React.forwardRef(({className, children, tag: Tag, disabled, active, ...attrs }, ref) => {
  
  const classes = ClassName(
    'list-group-item',
    className,
    {disabled},
    {active}
  );
  
  if (attrs.href && Tag === 'li') {
    Tag = 'a'
  };

  return (
    <Tag className={classes} {...attrs} ref={ref}>
      {children}
    </Tag>
  );
});

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
  disabled: false,
  active: false
};

export default ListGroupItem;
