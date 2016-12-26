/* global document, jsForm */

// @todo Turn error log on
// import Raven from 'raven-js';
// Raven.config('https://yo-key@sentry/777').install();

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Form from './components/common/Form/Form';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ele = document.getElementById('material-form');

if (ele && typeof jsForm !== 'undefined' && jsForm !== null) {
  render(<Form {...jsForm} />, ele);
}
