import { useState } from 'react';

import Page from '../../components/page';
import '../../components/container';
import Books from '../../components/books';
import BookModal from '../../components/book-modal';

import booksStore from '../../store/books-store';

import { IBook, IBookIndexed } from '../../models';

function HomeView() {
  const [editableBookData, setEditableBookData] = useState<IBookIndexed>();
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState<boolean>(false);
  const [isEditBookModalOpen, setIsEditBookModalOpen] = useState<boolean>(false);

  const toggleAddBookModal = () => {
    setIsAddBookModalOpen(!isAddBookModalOpen);
  }

  const toggleEditBookModal = (id?: number) => {
    if (!isEditBookModalOpen && !!id) {
      const editableBook = booksStore.getEditableBookData(id);

      if (editableBook) {
        setEditableBookData({ ...editableBook });
      }
    }

    setIsEditBookModalOpen(!isEditBookModalOpen);
  }

  const addNewBook = (newBook: IBook) => {
    booksStore.addBook(newBook);
  };

  const editBook = (editedBook: IBook) => {
    if (editableBookData?.id) {
      booksStore.editBook(editableBookData.id, editedBook);
    }
  };

  return (
    <Page mix="container">
      <Books
        books={booksStore.books}
        onAddBook={toggleAddBookModal}
        onEditBook={toggleEditBookModal}
        onDeleteBook={booksStore.deleteBook}
      />

      <BookModal
        isOpen={isAddBookModalOpen}
        type="add"
        submitHandler={addNewBook}
        closeHandler={toggleAddBookModal}
      />

      <BookModal
        isOpen={isEditBookModalOpen}
        type="edit"
        submitHandler={editBook}
        closeHandler={toggleEditBookModal}
        bookData={editableBookData}
      />
    </Page>
  );
}

export default HomeView;
