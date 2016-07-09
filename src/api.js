/* global NODE_ENV */

require('es6-promise').polyfill();
import axios from 'axios';
import * as Actions from './actions';
import * as Lib from './libs';

export function makeRequest(dispatcher, params, then, error) {
  const spinnerTimeout = window.setTimeout(
    () => dispatcher(Actions.startSpinner()),
    300
  );

  axios(params).then((result) => {
    if (then) then(result);
    window.clearTimeout(spinnerTimeout);
    dispatcher(Actions.stopSpinner());
  }).catch((r) => {
    window.clearTimeout(spinnerTimeout);
    dispatcher(Actions.stopSpinner());

    if (error) {
      error(r);

      if (NODE_ENV !== 'development') {
        Lib.logException(new Error());
      }
    }
  });
}

export function fetch(dispatcher, options, then, error) {
  makeRequest(
    dispatcher,
    options,
    (r) => {
      if (then) then(r.data);
    },
    error
  );
}

function convertUrlToFilename(url, ext = '.json') {
  let name = url;

  name = name.replace(/^(https?:)?\/\//, '');
  name = name.replace(/\/$/, '');
  name = name.replace(/\//g, '-');

  return `/api/${name}${ext}`;
}

export function loadList(dispatcher) {
  let url = 'https://supa-pupa/api/v1/list';

  if (NODE_ENV === 'development') {
    url = convertUrlToFilename(url);
  }

  dispatcher(Actions.setLoaded('list', false));

  makeRequest(
    dispatcher,
    { url },
    (response) => {
      dispatcher(Actions.setLoaded('list', true));
      dispatcher(Actions.setList(response.data));
    },
    () => dispatcher(Actions.setList(false))
  );
}
