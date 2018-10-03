import axios from 'axios';
import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IConnectorFactory,
  IOptionalElementDefinition,
  IRemoteConnectorOptions,
  ITableLocator,
} from '../typings';

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

  const url: (locator: ITableLocator) => string =
  (locator) => `/${locator.locale}/${locator.ns}/${locator.type}.json`;

  const get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition> =
  (locator) => {
    return new Bluebird((resolve: any, reject: any) => {
      instance.get(url(locator)).then(
        R.compose(resolve, R.prop('data')),
      ).catch(reject);
    });
  };

  return {
    get,
  };
};

export default remoteConnector;
