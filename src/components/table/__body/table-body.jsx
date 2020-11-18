import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ children }) => (
  <tbody className="table__body">
    {children}
  </tbody>
);

TableBody.propTypes = {
  children: PropTypes.node,
}

export default TableBody;
