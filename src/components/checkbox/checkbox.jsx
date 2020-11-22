import React from 'react';
import PropTypes from 'prop-types';

import classname from '../../helpers/classname';

const Checkbox = (props) => {
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

Checkbox.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  type: 'button',
};

export default Checkbox;
