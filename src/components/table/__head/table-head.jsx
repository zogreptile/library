import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ children }) => (
  <thead className="table__head">
    {children}
  </thead>
);

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
