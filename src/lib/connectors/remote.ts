import axios, { AxiosInstance } from 'axios';
import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IConnectorFactory,
  IMeta,
  IOptionalElementDefinition,
  IRemoteConnectorOptions,
  ISearchDefinition,
} from '../typings';
import {
  fetchData,
  fetchMeta,
  locatorUrl,
} from './utili';

const getResult: (instance: AxiosInstance, locator: ISearchDefinition) => Bluebird<IOptionalElementDefinition> =
(instance, locator) => {
  return new Bluebird((resolve: any, reject: any) => {
    instance.get(locatorUrl(locator)).then(resolve).catch(reject);
  });
};

const remoteConnector: (options: IRemoteConnectorOptions) => IConnectorFactory =
(options) => {
  const instance = axios.create({
    baseURL: options.baseURL,
  });
  const debug = R.defaultTo(false, options.debug);

  if (debug) {
    instance.interceptors.request.use((request) => {
      // tslint:disable-next-line:no-console
      console.log('Starting Request', request);
      return request;
    });
  }

  const get: (locator: ISearchDefinition) => Bluebird<IOptionalElementDefinition> =
  (locator) => getResult(instance, locator).then(fetchData);

  const meta: (locator: ISearchDefinition) => Bluebird<IMeta> =
  (locator) => getResult(instance, locator).then(fetchMeta);

  const list: () => Bluebird<ISearchDefinition[]> =
    () => {
      // tslint:disable-next-line:no-console
      console.error('Remote connector cannot list file definitions');
      return Bluebird.resolve([]);
    };

  return {
    get,
    meta,
    list,
  };
};

export default remoteConnector;
