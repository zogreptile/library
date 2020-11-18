import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../../helpers/classname';

const TableCell = (props) => {
  const CellTag = props.mods && props.mods.type === 'heading' ? 'th' : 'td';

  return (
    <CellTag className={classname('table__cell', props)}>
      <div className="table__cell-content">
        {props.children}
      </div>
    </CellTag>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default TableCell;
