// export function logException(ex, context) {
export function logException(ex) {
//  Raven.captureException(ex, {
//    extra: context
//  });

  /* eslint no-console:0 */
  if (window.console && console.error) {
    console.error(ex);
  }
}

/*
import Raven from 'raven-js';
import striptags from 'striptags';
import { browserHistory } from 'react-router';

import moment from 'moment';
moment.locale('ru');

import numeral from 'numeral';
numeral.language('ru', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'тыс',
    million: 'млн',
    billion: 'тыс млн',
    trillion: 'трлн',
  },
  currency: {
    // symbol: '₽',
    symbol: 'руб.',
  },
});

numeral.language('ru');


export const formatCurrency = (value) => numeral(value).format('0,0[.]00 $');
export const formatNumber = (value) => numeral(value).format('0,0[.]0');
export const formatDateTime = (time) => moment(time).format('LLL');
export const now = () => moment();


export const getCase = (_number, _case1, _case2, _case3) => {
  const base = _number - Math.floor(_number / 100) * 100;
  let result;

  if (base > 9 && base < 20) {
    result = _case3;
  } else {
    const remainder = _number - Math.floor(_number / 10) * 10;

    if (remainder === 1) result = _case1;
    else if (remainder > 0 && remainder < 5) result = _case2;
    else result = _case3;
  }

  return result;
};
*/
