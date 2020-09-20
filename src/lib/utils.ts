// tslint:disable:no-console
import * as R from 'ramda';
import { v4 as uuidv4 } from 'uuid';;
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

const getUUID: () => uuid = uuidv4;

const JSONprettify: (obj: any) => string =
(obj) => JSON.stringify(obj, null, 2);

const dg: (group: string, obj: any) => void =
(group, obj) => {
  console.group(group);
  console.log(obj);
  console.groupEnd();
};

const removeExtension: (filename: string) => string =
(filename) => filename.substr(0, filename.lastIndexOf('.'));

const spaces: (n: number) => string = (n) => ' '.repeat(n);

export {
  compactArray,
  defaultToEmptyArray,
  defaultToNull,
  randomFromArray,
  deepMerge,
  getUUID,
  JSONprettify,
  dg,
  removeExtension,
  spaces,
};
