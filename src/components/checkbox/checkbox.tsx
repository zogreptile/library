import React from 'react';

import classname from '../../helpers/classname';

type TCheckboxProps = {
  id: string;
  caption: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Checkbox = (props: TCheckboxProps) => {
  return (
    <div className={classname('checkbox', props, { mods: { theme: 'standard' } })}>
      <label
        className="checkbox__inner"
        htmlFor={props.id}
      >
        {props.caption && (
          <div className={'checkbox__caption'}>
            {props.caption}
          </div>
        )}

        <input
          className={'checkbox__input'}
          id={props.id}
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />

        <div className="checkbox__control"></div>
      </label>
    </div>
  );
};

export default Checkbox;
