import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../Image/Image';
import Icon from '../Icon/Icon';

import '../../../Icomoon/style.css';
import './Chip.scss';

function Chip({
    text, withIcon, withImage, withClose, imgSrc, imgAlt, iconName, className, id, onChipClick, onCloseClick, ...attrs}) 
{
  const classes = classNames(
    'chip',
    className,
  );

  const onClickChipAction = () => {
    onChipClick(id);
  };

  const onCloseChipAction = (e) => {
    e.stopPropagation();
    onCloseClick(e, id);
  };

  return (
    <div className={classes} onClick={onClickChipAction}>
      {withImage && 
        <span className="chip__image">
          <Image src={imgSrc} alt={imgAlt} width={24} height={24} />
        </span>
      }
       {withIcon && 
        <span className="chip__icon">
          <Icon name={iconName} />
        </span>
      }
      <span className="chip__text">{text}</span>
      {withClose && 
        <span className="chip__close" onClick={(e) => {onCloseChipAction(e)}}>
          <Icon name={iconName} />
        </span>
      }
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired, 
  withIcon: PropTypes.bool, 
  withImage: PropTypes.bool, 
  withClose: PropTypes.bool, 
  imgSrc: PropTypes.string, 
  imgAlt: PropTypes.string, 
  iconName: PropTypes.string, 
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  text: 'Chip',
  withIcon: false,
  withImage: false,
  withClose: false,
  imgSrc: '',
  imgAlt: '',
  iconName: '',
  className: '',
  id: null,
  onChipClick: () => {},
  onCloseClick: () => {},
};

export default Chip;