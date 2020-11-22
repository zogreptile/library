import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/home';
import NotFound from '../../pages/not-found';

function App() {
  return (
    <React.StrictMode>
      <HashRouter >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter >
    </React.StrictMode>
  );
};

export default App;
