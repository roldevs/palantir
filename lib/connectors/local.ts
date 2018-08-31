import fs from 'fs';
import * as R from 'ramda';
import {
  IConnectorOptions,
  ITable,
  ITableLocator,
} from '../typings';

const localConnector: (options: IConnectorOptions) => {
  get: (locator: ITableLocator) => Promise<ITable>,
} =
(options) => {
  const filePath: (locator: ITableLocator) => string =
  (locator) => `${options.rootPath}/${locator.locale}/${locator.ns}/${locator.type}.json`;

  const get: (locator: ITableLocator) => Promise<ITable> =
  (locator) => {
    return new Promise((resolve: any, reject: any) => {
      fs.readFile(filePath(locator), 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  };

  return {
    get,
  };
};

export = localConnector;
