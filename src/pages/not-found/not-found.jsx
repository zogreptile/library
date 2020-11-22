import { Link } from 'react-router-dom';

import Page from '../../components/page';
import '../../components/container';

function NotFoundView() {
  return (
    <Page mix="container">
      <h1>Запрашиваемая страница не найдена</h1>

      <Link to="/">Перейти на главную</Link>
    </Page>
  );
}

export default NotFoundView;
