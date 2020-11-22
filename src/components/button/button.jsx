import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Button = (props) => {
  const {
    children,
    onClick,
    type,
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

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
