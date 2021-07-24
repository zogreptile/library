import React, { useState } from 'react';

import Form, {
  FormField,
  FormActions,
  FormAction,
} from '../form';
import TextField from '../text-field';
import NumberField from '../number-field';
import Checkbox from '../checkbox';
import Button from '../button';

import { IBook } from '../../models';

interface IBookFormProps {
  type: 'add' | 'edit';
  submitHandler: (bookData: IBook) => void;
  cancelHandler: (id?: number) => void;
  bookData?: IBook;
};

interface IInvalidFields {
  [formFieldName: string]: boolean;
};

const defaultFormState: IBook = {
  title: '',
  author: '',
  price: 0,
  date: '',
  inStock: true,
};

const BookForm: React.FC<IBookFormProps> = (props) => {
  const { bookData = {} } = props;
  const [formState, setFormState] = useState<IBook>({ ...defaultFormState, ...bookData });
  const [invalidFields, setInvalidFields] = useState<IInvalidFields>({});

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const onFieldFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = e.currentTarget;

    setInvalidFields({
      ...invalidFields,
      [name]: false,
    });
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formState.author.trim() || !formState.title.trim()) {
      setInvalidFields({
        author: !formState.author,
        title: !formState.title,
      });

      return;
    }

    props.submitHandler(formState);
    setFormState(defaultFormState);
    props.cancelHandler();
  }

  return(
    <Form
      onSubmit={submitForm}
    >
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
            onClick={props.cancelHandler}
          >Отмена</Button>
        </FormAction>
      </FormActions>
    </Form>
  );
}

export default BookForm;
