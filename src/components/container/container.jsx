import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Container = (props) => (
  <div className={classname('container', props)}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
