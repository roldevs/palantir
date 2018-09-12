
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import { uuid } from './typings';

const compactArray = R.reject(R.isNil);
const defaultToNull = R.defaultTo(null);

const randomFromArray: (array: any) => any =
(array) => array[Math.floor(Math.random() * array.length)];

const getUUID: () => uuid = uuidv1;

export {
  compactArray,
  defaultToNull,
  randomFromArray,
  getUUID,
};
