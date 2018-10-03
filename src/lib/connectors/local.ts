import Bluebird from 'bluebird';
import fs from 'fs';
import {
  IConnectorFactory,
  ILocalConnectorOptions,
  IOptionalElementDefinition,
  ITableLocator,
} from '../typings';

const localConnector: (options: ILocalConnectorOptions) => IConnectorFactory =
(options) => {
  const filePath: (locator: ITableLocator) => string =
  (locator) => `${options.rootPath}/${locator.locale}/${locator.ns}/${locator.type}.json`;

  const get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition> =
  (locator) => {
    return new Bluebird((resolve: any, reject: any) => {
      fs.readFile(filePath(locator), 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const element: IOptionalElementDefinition = JSON.parse(data);
          resolve(element);
        }
      });
    });
  };

  return {
    get,
  };
};

export default localConnector;
