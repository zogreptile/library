import React from 'react';

const TableRow: React.FC = ({ children }) => (
  <tr className="table__row">
    {children}
  </tr>
);

export default TableRow;
