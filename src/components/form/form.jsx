import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Form = (props) => (
  <form
    className={classname('form', props, { mods: { theme: 'standard' } })}
    onSubmit={props.onSubmit}
    autoComplete={props.autocomplete}
  >
    <div className="form__content">
      {props.children}
    </div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  autocomplete: PropTypes.string,
};

Form.defaultProps = {
  autocomplete: 'off',
};

export default Form;
