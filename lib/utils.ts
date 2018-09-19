
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import { uuid } from './typings';

const compactArray = R.reject(R.isNil);
const defaultToNull = R.defaultTo(null);
const defaultToEmptyArray = R.defaultTo([]);

const randomFromArray: (array: any) => any =
(array) => defaultToNull(array[Math.floor(Math.random() * array.length)]);

const getUUID: () => uuid = uuidv1;

export {
  compactArray,
  defaultToEmptyArray,
  defaultToNull,
  randomFromArray,
  getUUID,
};
