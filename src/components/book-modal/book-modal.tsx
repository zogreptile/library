import React from 'react';

import BookForm from '../book-form';
import Modal from '../modal';

import { IBook } from '../../models';

const TITLE = {
  add: 'Добавление книги',
  edit: 'Редактирование книги',
};

interface IBookModal {
  isOpen: boolean;
  submitHandler: (book: IBook) => void;
  closeHandler: (id?: number) => void;
  type: 'add' | 'edit';
  bookData?: IBook;
}

const BookModal: React.FC<IBookModal> = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      title={TITLE[props.type]}
    >
      <BookForm
        type={props.type}
        bookData={props.bookData}
        submitHandler={props.submitHandler}
        cancelHandler={props.closeHandler}
      />
    </Modal>
  );
}

export default BookModal;
