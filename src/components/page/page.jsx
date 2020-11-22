import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Page = (props) => (
  <div className={classname('page', props)}>
    {props.children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
