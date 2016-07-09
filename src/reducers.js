/* global NODE_ENV */

import { combineReducers } from 'redux';
import { List, Map } from 'immutable';

// Just ease ESLint rule
const map = Map;
const list = List;

const api = (state = map({
  spinner: 0,
  loaded: map(),
  list: list(),
}), action) => {
  switch (action.type) {
    case 'START_SPINNER':
      return state.set('spinner', state.get('spinner') + 1);

    case 'STOP_SPINNER': {
      let spinner = state.get('spinner');
      // @todo Consider throw an Exception?
      if (spinner < 0) spinner = 0;
      return state.set('spinner', spinner);
    }

    case 'SET_LOADED':
      return state.setIn(['loaded', action.name], action.result);

    case 'SET_LIST':
      return state.set('list', list(action.list));

    default:
      return state;
  }
};

export default combineReducers({
  api,
});
