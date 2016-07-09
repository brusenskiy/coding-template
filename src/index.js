// @todo Turn error log on
// import Raven from 'raven-js';
// Raven.config('https://yo-key@sentry/777').install();

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App.js';

const ele = document.getElementById('root');

if (ele) {
  const store = createStore(reducers);
  render(<Provider store={store}><App /></Provider>, ele);
}
