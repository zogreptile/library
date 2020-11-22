import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form, {
  FormField,
  FormActions,
  FormAction,
} from '../form';
import TextField from '../text-field';
import NumberField from '../number-field';
import Checkbox from '../checkbox';
import Button from '../button';

const defaultFormState = {
  author: '',
  title: '',
  price: 0,
  date: '',
  inStock: true,
};

const BookForm = (props) => {
  const [formState, setFormState] = useState({ ...defaultFormState, ...props.bookData });
  const [invalidFields, setInvalidFields] = useState({});

  const onFieldChange = (e) => {
    const { target } = e;
    const { name } = target;

    let value;

    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (name === 'price') {
      value = target.value ? Number.parseFloat(target.value) : '';
    } else {
      value = target.value;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const onFieldFocus = (e) => {
    const { name } = e.currentTarget;

    setInvalidFields({
      ...invalidFields,
      [name]: false,
    });
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (!formState.author.trim() || !formState.title.trim()) {
      setInvalidFields({
        author: !formState.author,
        title: !formState.title,
      });

      return;
    }

    props.onSubmit(formState);
    setFormState(defaultFormState);
    props.onCancel();
  }

  return(
    <Form>
      <FormField>
        <TextField
          mods={{ ...(invalidFields.author ? { state: 'error' } : {}) }}
          id="input-author"
          caption="Автор"
          name="author"
          value={formState.author}
          onChange={onFieldChange}
          onFocus={onFieldFocus}
        />
      </FormField>
  
      <FormField>
        <TextField
          mods={{ ...(invalidFields.title ? { state: 'error' } : {}) }}
          id="input-title"
          caption="Название"
          name="title"
          value={formState.title}
          onChange={onFieldChange}
          onFocus={onFieldFocus}
        />
      </FormField>
  
      <FormField>
        <NumberField
          id="input-price"
          caption="Стоимость"
          name="price"
          value={formState.price}
          onChange={onFieldChange}
        />
      </FormField>
  
      <FormField>
        <TextField
          id="input-date"
          caption="Дата выпуска"
          name="date"
          value={formState.date}
          onChange={onFieldChange}
        />
      </FormField>
  
      <FormField>
        <Checkbox
          id="input-in-stock"
          caption="В наличии"
          name="inStock"
          checked={formState.inStock}
          onChange={onFieldChange}
        />
      </FormField>
  
      <FormActions>
        <FormAction>
          <Button
            mods={{
              theme: 'standard',
              type: 'primary',
            }}
            onClick={submitForm}
            type="submit"
          >
            {props.type === 'edit' ? 'Сохранить' : 'Добавить'}
          </Button>
        </FormAction>

        <FormAction>
          <Button
            mods={{
              theme: 'standard',
              type: 'secondary',
            }}
            onClick={props.onCancel}
          >Отмена</Button>
        </FormAction>
      </FormActions>
    </Form>
  );
}

BookForm.propTypes = {
  type: PropTypes.oneOf(['add', 'edit']),
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  bookData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    date: PropTypes.string,
    inStock: PropTypes.bool,
  }),
};

BookForm.defaultProps = {
  bookData: {},
};

export default BookForm;
