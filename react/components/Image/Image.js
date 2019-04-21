import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

const Image = ({src, alt, className, width, height, circle, ...attr}) => {

  if(!src) {
    src = `https://via.placeholder.com/${width}x${height}`
  };

  const classes = classNames(
    className,
    { circle }
  );

  return (
    <img src={src} alt={alt} className={classes} width={width} height={height} {...attr} />
  );
};

Image.defaultProps = {
  src: 'https://via.placeholder.com/350x350',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
  circle: false,
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
};

export default Image;