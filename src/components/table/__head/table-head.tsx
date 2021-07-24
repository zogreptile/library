import React from 'react';

const TableHead: React.FC = ({ children }) => (
  <thead className="table__head">
    {children}
  </thead>
);

export default TableHead;
