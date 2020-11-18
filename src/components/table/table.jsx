import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Table = (props) => (
  <table className={classname('table', props, { mods: { theme: 'standard' } })}>
    {props.children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
};


export default Table;
