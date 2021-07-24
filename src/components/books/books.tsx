import { observer } from "mobx-react"

import BooksTable from '../books-table';
import Button from '../button';

import classname from '../../helpers/classname';

import { IBookIndexed } from '../../models';

interface IBooksProps {
  onAddBook: () => void;
  onEditBook: (id?: number) => void;
  onDeleteBook: (id: number) => void;
  books: IBookIndexed[];
  mix?: string;
  mods?: Record<string, string | boolean>;
}

const Books: React.FC<IBooksProps> = (props) => {
  const { books = [] } = props;

  return (
    <section className={classname('books', props)}>
      <h1 className="books__title">
        Книги
      </h1>

      {!!books.length
        ? (
          <BooksTable
            books={books}
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

export default observer(Books);
