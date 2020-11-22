import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../../helpers/classname';

const FormActions = (props) => (
  <div className={classname('form__actions', props)}>
    {props.children}
  </div>
);

FormActions.propTypes = {
  children: PropTypes.node,
};

export default FormActions;
