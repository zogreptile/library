import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className={classname('modal', props, { mods: { theme: 'standard' } })}>
      <div className="modal__inner">
        {props.title && (
          <h1 className="modal__title">
            {props.title}
          </h1>
        )}

        <div className="modal__content">
          {props.children}
        </div>
      </div>
    </div>
  )
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
