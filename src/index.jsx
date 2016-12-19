/* global document */

// @todo Turn error log on
// import Raven from 'raven-js';
// Raven.config('https://yo-key@sentry/777').install();

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ele = document.getElementById('root');
if (ele) {
  const store = createStore(reducers);
  render(<Provider store={store}><App /></Provider>, ele);
}
