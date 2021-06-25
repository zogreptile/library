import React from 'react';

import classname from '../../helpers/classname';

interface IContainerProps {
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Container: React.FC<IContainerProps> = (props) => (
  <div className={classname('container', props)}>
    {props.children}
  </div>
);

export default Container;
