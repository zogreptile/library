import { useState } from 'react';

import Page from '../../components/page';
import '../../components/container';
import Books from '../../components/books';
import BookModal from '../../components/book-modal';

import booksStore from '../../store/books-store.js';

function HomeView() {
  const [editableBookData, setEditableBookData] = useState({});
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const [isEditBookModalOpen, setIsEditBookModalOpen] = useState(false);

  const toggleAddBookModal = () => {
    setIsAddBookModalOpen(!isAddBookModalOpen);
  }

  const toggleEditBookModal = (id) => {
    if (!isEditBookModalOpen) {
      const editableBook = booksStore.getEditableBookData(id);
      setEditableBookData({ ...editableBook });
    }

    setIsEditBookModalOpen(!isEditBookModalOpen);
  }

  const addNewBook = (newBook) => {
    booksStore.addBook({ ...newBook, id: Math.random() });
  };

  const editBook = (newData) => {
    booksStore.editBook(editableBookData.id, newData);
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
        onSubmit={addNewBook}
        onClose={toggleAddBookModal}
      />

      <BookModal
        isOpen={isEditBookModalOpen}
        type="edit"
        onSubmit={editBook}
        onClose={toggleEditBookModal}
        bookData={editableBookData}
      />
    </Page>
  );
}

export default HomeView;
