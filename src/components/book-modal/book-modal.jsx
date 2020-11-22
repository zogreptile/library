import React from 'react';
import PropTypes from 'prop-types';

import BookForm from '../book-form';
import Modal from '../modal';

const TITLE = {
  add: 'Добавление книги',
  edit: 'Редактирование книги',
};

const BookModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      title={TITLE[props.type]}
    >
      <BookForm
        type={props.type}
        bookData={props.bookData}
        onSubmit={props.onSubmit}
        onCancel={props.onClose}
      />
    </Modal>
  );
}

BookModal.propTypes = {
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['add', 'edit']),
  bookData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    date: PropTypes.string,
    inStock: PropTypes.bool,
  }),
};

export default BookModal;
