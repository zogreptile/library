import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const NumberField = (props) => {
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

NumberField.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default NumberField;
