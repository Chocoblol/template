import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/Portal';
import Btn from '../Button/Button';
import Icon from '../Icon/Icon';

import '../../../Icomoon/style.css';
import './ModalWindow.css';


const ModalWindow = ({
  isOpen, title, onCancel, anyClick, onSubmit, children, firstBtn, secondBtn, width, height, ...attrs
}) => {

  return(
    <>
      {
        isOpen && 
        <Portal>
          <div className="modal__overlay">
            <div className="modal__window" style={{height: height, width: width}}>
              <div className="modal__header">
                <div className="modal__title">{title}</div>
                <Icon className="modal__icon" name="close" onClick={onCancel} />
              </div>
              <div className="modal__body">
                {children}
              </div>
              <div className="modal__footer">
                <Btn tabIndex="0" className="modal__btn_submit" onClick={onSubmit} disabled={attrs.disabled}>{firstBtn}</Btn>
                <Btn tabIndex="0" className="modal__btn_close" onClick={anyClick}>{secondBtn}</Btn>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool, 
  title: PropTypes.string, 
  onCancel: PropTypes.func, 
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  anyClick: PropTypes.func,
  firstBtn: PropTypes.string,
  secondBtn: PropTypes.string,
};

ModalWindow.defaultProps = {
  isOpen: false,
  title: '',
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
  anyClick: () => {},
  firstBtn: '',
  secondBtn: '',
};

export default ModalWindow;