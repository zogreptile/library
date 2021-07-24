import React from 'react';

import classname from '../../helpers/classname';

interface INumberFieldProps {
  id: string;
  caption?: string;
  name: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const NumberField: React.FC<INumberFieldProps> = (props) => {
  return (
    <div className={classname('number-field', props, { mods: { theme: 'standard' } })}>
      {props.caption && (
        <label
          className={'number-field__caption'}
          htmlFor={props.id}
        >
          {props.caption}
        </label>
      )}

      <input
        className={'number-field__input'}
        id={props.id}
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export default NumberField;
