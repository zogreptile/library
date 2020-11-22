import PropTypes from 'prop-types';
import { observer } from "mobx-react"

import BooksTable from '../books-table';
import Button from '../button';

import classname from '../../helpers/classname';

function Books(props) {
  return (
    <section className={classname('books', props)}>
      <h1 className="books__title">
        Книги
      </h1>

      {!!props.books.length
        ? (
          <BooksTable
            books={props.books}
            onEditBook={props.onEditBook}
            onDeleteBook={props.onDeleteBook}
          />
        )
        : (
          <p className="books__description">В вашем списке ещё нет книг.</p>
        )
      }

      <div className="books__actions">
        <Button
          mods={{
            theme: 'standard',
            type: 'primary',
          }}
          onClick={props.onAddBook}
        >
          Добавить
        </Button>
      </div>
    </section>
  );
}

Books.propTypes = {
  onAddBook: PropTypes.func,
  onEditBook: PropTypes.func,
  onDeleteBook: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    date: PropTypes.string,
    inStock: PropTypes.bool,
  })),
}

Books.defaultProps = {
  books: [],
}

export default observer(Books);
