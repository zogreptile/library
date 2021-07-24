import React from 'react';

import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../table';
import Button from '../button';

import { IBookIndexed } from '../../models';

interface IBooksTableProps {
  onEditBook: (id?: number) => void;
  onDeleteBook: (id: number) => void;
  books: IBookIndexed[];
}

const BooksTable: React.FC<IBooksTableProps> = (props) => {
  const { books = [] } = props;

  return (
    <Table
      mods={{ type: 'books' }}
      mix={'books-table'}
    >
      <TableHead>
        <TableRow>
          <TableCell mods={{ type: 'heading' }}>
            Название
          </TableCell>

          <TableCell mods={{ type: 'heading' }}>
            Автор
          </TableCell>

          <TableCell mods={{ type: 'heading' }}>
            Стоимость
          </TableCell>

          <TableCell mods={{ type: 'heading' }}>
            Дата
          </TableCell>

          <TableCell mods={{ type: 'heading' }}>
            В наличии
          </TableCell>

          <TableCell mods={{ type: 'heading', 'hidden-content': true }}>
            Редактировать
          </TableCell>

          <TableCell mods={{ type: 'heading', 'hidden-content': true }}>
            Удалить
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {books.map(book => (
          <TableRow key={book.id}>
            <TableCell>
              {book.title}
            </TableCell>

            <TableCell>
              {book.author}
            </TableCell>

            <TableCell>
              {book.price}
            </TableCell>

            <TableCell>
              {book.date}
            </TableCell>

            <TableCell>
              {book.inStock ? 'Да' : 'Нет'}
            </TableCell>

            <TableCell>
              <Button
                mods={{
                  theme: 'action',
                  'only-icon': true,
                }}
                mix={'books-table__edit'}
                onClick={() => props.onEditBook(book.id)}
              >
                Редактировать
              </Button>
            </TableCell>

            <TableCell>
              <Button
                mods={{
                  theme: 'action',
                  'only-icon': true,
                }}
                mix={'books-table__delete'}
                onClick={() => props.onDeleteBook(book.id)}
              >
                Удалить
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export default BooksTable;
