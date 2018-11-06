import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IConnectorFactory,
  IElement,
  IElementDefinition,
  IMeta,
  IOptionalElementDefinition,
  ITableLocator,
  ITestConnectorOptions,
} from '../typings';
import { fetchData, fetchMeta } from './utili';

const getLocator: (options: ITestConnectorOptions, locator: ITableLocator) => {
  data: IElementDefinition,
  meta?: IMeta,
} | null =
(options, locator) => R.defaultTo(null, options.elements[locator.locale][locator.ns][locator.type]);

const getElement: (options: ITestConnectorOptions, locator: ITableLocator) => IElementDefinition | null =
(options, locator) => fetchData(getLocator(options, locator));

const getMeta: (options: ITestConnectorOptions, locator: ITableLocator) => IMeta | null =
(options, locator) => fetchMeta(getLocator(options, locator));

const getResult: <T>(options: ITestConnectorOptions, callback: any) => (locator: ITableLocator) =>
  Bluebird<T> =
(options, callback) => (locator) => new Bluebird((resolve: any) => {
  try {
    resolve(callback(options, locator));
  } catch {
    resolve(null);
  }
});

const testConnector: (options: ITestConnectorOptions) => IConnectorFactory =
(options) => {
  const get: (locator: ITableLocator) =>
    Bluebird<IOptionalElementDefinition> = getResult(options, getElement);

  const meta: (locator: ITableLocator) =>
    Bluebird<IMeta> = getResult(options, getMeta);

  return {
    get,
    meta,
  };
};

export default testConnector;
