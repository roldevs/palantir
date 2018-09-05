import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IConnectorFactory,
  IOptionalElementDefinition,
  ITableLocator,
  ITestConnectorOptions,
} from '../typings';

const testConnector: (options: ITestConnectorOptions) => IConnectorFactory =
(options) => {
  const get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition> =
  (locator) => new Bluebird((resolve: any) => {
    try {
      resolve(
        R.defaultTo(null, options.elements[locator.locale][locator.ns][locator.type]),
      );
    } catch {
      resolve(null);
    }
  });

  return {
    get,
  };
};

export default testConnector;
