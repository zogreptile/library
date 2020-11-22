import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../../helpers/classname';

const FormField = (props) => (
  <div className={classname('form__field', props)}>
    {props.children}
  </div>
);

FormField.propTypes = {
  children: PropTypes.node,
};

export default FormField;
