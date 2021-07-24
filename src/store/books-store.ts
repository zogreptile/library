import { makeAutoObservable, IObservableArray, observable } from "mobx"

import { IBook, IBookIndexed } from '../models';

class BooksStore {
  readonly books: IObservableArray<IBookIndexed> = observable([
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
  ]);

  constructor() {
    makeAutoObservable(this);
  }

  addBook(book: IBook) {
    const newBook = { ...book, id: Date.now() };

    this.books.push(newBook);
  }

  getEditableBookData(id: number) {
    return this.books.find(book => book.id === id);
  }

  editBook(id: number, newData: IBook) {
    const editableBookIndex = this.books.findIndex(book => book.id === id);

    if (editableBookIndex > -1) {
      this.books[editableBookIndex] = { ...this.books[editableBookIndex], ...newData};
    }
  }

  deleteBook(id: number) {
    const bookToRemove = this.books.find(book => book.id === id)

    if (bookToRemove) this.books.remove(bookToRemove);
  }
}

export default new BooksStore();
