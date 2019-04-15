import Bluebird from 'bluebird';
import program from 'commander';
import * as R from 'ramda';
import { argsParser, IParserOptions } from './cli/parser';
import localConnectorCreator from './connectors/local';
import remoteConnectorCreator from './connectors/remote';
import metaModule from './meta';
import repositoryCreator from './repository/memory';
import {
  ICliModule, IConnectorFactory, IElementFormatted, IMetaFactory, IWorldElement,
} from './typings';
import worldCreator from './world';

const remoteConnector: (debug: boolean) => IConnectorFactory = (debug) => remoteConnectorCreator({
  debug,
  baseURL: 'https://raw.githubusercontent.com/roldevs/palantir/master/definitions/',
});

const localConnector: () => IConnectorFactory = () => localConnectorCreator({
  rootPath: './definitions',
});

const getWorld: (params: IParserOptions) => any =
(params) => {
  const connectorCreators: any = {
    0: remoteConnector(params.debug),
    1: localConnector(),
  };

  const meta: IMetaFactory = metaModule({
    connector: connectorCreators[params.connector],
    metaFilePath: './meta.yml',
  });

  return worldCreator({
    connector: connectorCreators[params.connector],
    repository: repositoryCreator({
      locale: params.locale,
      elements: {},
    }),
    meta,
  });
};

const cliModule: ICliModule =
(args) => {
  const params: IParserOptions = argsParser(args);
  const world = getWorld(params);

  const get: () => Bluebird<IWorldElement[]> =
  () => {
    if (R.isNil(program.namespace) || R.isNil(program.type)) {
      return Bluebird.reject('Argument missing');
    }

    return world.get({
      search: [{
        locale: params.locale,
        ns: program.namespace,
        type: program.type,
      }],
      count: params.count,
    });
  };

  return {
    get,
  };
};

export default cliModule;
