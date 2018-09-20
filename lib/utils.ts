
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import { uuid } from './typings';

const compactArray = R.reject(R.isNil);
const defaultToNull = R.defaultTo(null);
const defaultToEmptyArray = R.defaultTo([]);

const randomFromArray: (array: any) => any =
(array) => defaultToNull(array[Math.floor(Math.random() * array.length)]);

const deepMerge: (array: any) => any =
R.reduce((acc: any, element: any) => {
  return R.mergeDeepLeft(acc, element);
}, {});

const getUUID: () => uuid = uuidv1;

const JSONprettify: (obj: any) => string =
(obj) => JSON.stringify(obj, null, 2);

export {
  compactArray,
  defaultToEmptyArray,
  defaultToNull,
  randomFromArray,
  deepMerge,
  getUUID,
  JSONprettify,
};
