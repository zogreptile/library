import { makeAutoObservable } from "mobx"

class BooksStore {
  books = [
    {
      id: Math.random(),
      title: 'Мастер и Маргарита',
      author: 'Михаил булгаков',
      price: 150,
      date: '1960',
      inStock: true,
    },
    {
      id: Math.random(),
      title: 'Братья Карамазовы',
      author: 'Фёдор Достоевский',
      price: 230,
      date: '1879',
      inStock: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  getEditableBookData(id) {
    return this.books.find(book => book.id === id);
  }

  editBook(id, newData) {
    this.books.forEach((book, ind, books) => {
      if (book.id === id) {
        books[ind] = { ...books[ind], ...newData};
      }
    });
  }
  
  deleteBook(id) {
    const bookToRemove = this.books.find(book => book.id === id)
    this.books.remove(bookToRemove);
  }
}

export default new BooksStore();
