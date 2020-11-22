import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const TextField = (props) => {
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

TextField.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default TextField;
