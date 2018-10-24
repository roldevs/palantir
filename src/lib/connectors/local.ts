import Bluebird from 'bluebird';
import fs from 'fs';
import YAML from 'yaml';
import {
  IConnectorFactory,
  IElementDefinition,
  ILocalConnectorOptions,
  IOptionalElementDefinition,
  ITableLocator,
} from '../typings';

const localConnector: (options: ILocalConnectorOptions) => IConnectorFactory =
(options) => {
  const filePath: (locator: ITableLocator) => string =
  (locator) => `${options.rootPath}/${locator.locale}/${locator.ns}/${locator.type}.yml`;

  const readFile: (path: string) => Bluebird<any> =
  (path) => {
    return new Bluebird((resolve: any, reject: any) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  const parseYaml: (data: any) => IElementDefinition =
  (data) => YAML.parse(data);

  const get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition> =
  (locator) => readFile(filePath(locator)).then(parseYaml);

  return {
    get,
  };
};

export default localConnector;
