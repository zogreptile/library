import React from 'react';

import classname from '../../helpers/classname';

interface TFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  autocomplete?: 'on' | 'off';
  mix?: string;
  mods?: Record<string, string | boolean>;
};

const Form: React.FC<TFormProps> = (props) => {
  const { autocomplete = 'off' } = props;

  return (
    <form
      className={classname('form', props, { mods: { theme: 'standard' } })}
      onSubmit={props.onSubmit}
      autoComplete={autocomplete}
    >
      <div className="form__content">
        {props.children}
      </div>
    </form>
  )
};

export default Form;
