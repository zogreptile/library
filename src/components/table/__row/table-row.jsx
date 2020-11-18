import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ children }) => (
  <tr className="table__row">
    {children}
  </tr>
);

TableRow.propTypes = {
  children: PropTypes.node,
};

export default TableRow;
