import React from 'react';

import classname from '../../helpers/classname';

interface ITextFieldProps {
  id: string;
  caption: string;
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  mix?: string;
  mods?: Record<string, string | boolean>;
};

const TextField = (props: ITextFieldProps) => {
  return (
    <div className={classname('text-field', props, { mods: { theme: 'standard' } })}>
      {props.caption && (
        <label
          className={'text-field__caption'}
          htmlFor={props.id}
        >
          {props.caption}
        </label>
      )}

      <input
        className={'text-field__input'}
        id={props.id}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export default TextField;
