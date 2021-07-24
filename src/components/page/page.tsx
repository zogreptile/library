import React from 'react';

import classname from '../../helpers/classname';

interface IPageProps {
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Page: React.FC<IPageProps> = (props) => (
  <div className={classname('page', props)}>
    {props.children}
  </div>
);

export default Page;
