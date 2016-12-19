import React from 'react';
// import Component from './components/common/ShallowCompareComponent';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import Root from './components/Root';
import NotFound from './components/common/NotFound';
import Page from './components/Page';

// import 'normalize.css';
import './app.scss';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRedirect to="page" />
      <Route path="page" component={Page} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
