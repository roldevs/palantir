import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IConnectorFactory,
  IElement,
  IElementDefinition,
  IMeta,
  IOptionalElementDefinition,
  ISearchDefinition,
  ITestConnectorOptions,
} from '../typings';
import { fetchData, fetchMeta } from './utili';

const getLocator: (options: ITestConnectorOptions, locator: ISearchDefinition) => {
  data: IElementDefinition,
  meta?: IMeta,
} | null =
(options, locator) => R.defaultTo(null, options.elements[locator.locale][locator.ns][locator.type]);

const getElement: (options: ITestConnectorOptions, locator: ISearchDefinition) => IElementDefinition | null =
(options, locator) => fetchData(getLocator(options, locator));

const getMeta: (options: ITestConnectorOptions, locator: ISearchDefinition) => IMeta | null =
(options, locator) => fetchMeta(getLocator(options, locator));

const getResult: <T>(options: ITestConnectorOptions, callback: any) => (locator: ISearchDefinition) =>
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
  const get: (locator: ISearchDefinition) =>
    Bluebird<IOptionalElementDefinition> = getResult(options, getElement);

  const meta: (locator: ISearchDefinition) =>
    Bluebird<IMeta> = getResult(options, getMeta);

  const toSearchDefinition: (locale: string, ns: string, type: string) =>
    ISearchDefinition =
    (locale, ns, type) => {
      return {
        locale, ns, type,
      };
    };

  const addLocators: (locale: string | number, ns: string | number) =>
    (acc: ISearchDefinition[], type: string | number) => ISearchDefinition[] =
    (locale, ns) => (acc, type) => R.flatten(
      R.append(
        toSearchDefinition(locale as string, ns as string, type as string),
        acc,
      ),
    );

  const addNs: (locale: string | number) => (acc: ISearchDefinition[], ns: string | number) =>
    ISearchDefinition[] =
    (locale) => (acc, ns) => R.reduce(
      addLocators(locale, ns),
      acc,
      R.keys(options.elements[locale][ns]),
    );

  const addLocales: (acc: ISearchDefinition[], locale: string | number) => ISearchDefinition[] =
    (acc, locale) => R.reduce(
      addNs(locale),
      acc,
      R.keys(options.elements[locale]),
    );

  const list: () => Bluebird<ISearchDefinition[]> =
    () => Bluebird.resolve(R.reduce<string, ISearchDefinition[]>(
      addLocales, [], R.keys(options.elements) as string[]),
    );

  return {
    get,
    meta,
    list,
  };
};

export default testConnector;
