import React from 'react';

import classname from '../../../helpers/classname';

interface ITableCell {
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const TableCell: React.FC<ITableCell> = (props) => {
  const CellTag = props.mods && props.mods.type === 'heading' ? 'th' : 'td';

  return (
    <CellTag className={classname('table__cell', props)}>
      <div className="table__cell-content">
        {props.children}
      </div>
    </CellTag>
  );
};

export default TableCell;
