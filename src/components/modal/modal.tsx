import React from 'react';

import classname from '../../helpers/classname';

interface IModalProps {
  isOpen: boolean;
  title: string;
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Modal: React.FC<IModalProps> = (props) => {
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

export default Modal;
