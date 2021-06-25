import React from 'react';

import classname from '../../helpers/classname';

interface TButtonProps {
  children: React.ReactNode;
  onClick: (event?: any) => void;
  type?: 'button' | 'reset' | 'submit';
  mix?: string;
  mods?: Record<string, string | boolean>;
};

const Button: React.FC<TButtonProps> = (props) => {
  const {
    children,
    onClick,
    type = 'button',
  } = props;

  return (
    <button
      className={classname('button', props)}
      onClick={onClick}
      type={type}
    >
      <span className="button__content">
        {children}
      </span>
    </button>
  );
};

export default Button;
