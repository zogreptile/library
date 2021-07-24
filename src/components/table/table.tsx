import React from 'react';

import classname from '../../helpers/classname';

interface ITable {
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Table: React.FC<ITable> = (props) => (
  <table className={classname('table', props, { mods: { theme: 'standard' } })}>
    {props.children}
  </table>
);

export default Table;
