import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../../helpers/classname';

const FormAction = (props) => (
  <div className={classname('form__action', props)}>
    {props.children}
  </div>
);

FormAction.propTypes = {
  children: PropTypes.node,
};

export default FormAction;
