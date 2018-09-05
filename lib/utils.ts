
import * as R from 'ramda';

const compactArray = R.reject(R.isNil);
const defaultToNull = R.defaultTo(null);

const randomFromArray: (array: any) => any =
(array) => array[Math.floor(Math.random() * array.length)];

export {
  compactArray,
  defaultToNull,
  randomFromArray,
};
