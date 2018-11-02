import Bluebird from 'bluebird';
import program from 'commander';
import * as R from 'ramda';
import { argsParser, IParserOptions } from './cli/parser';
import localConnectorCreator from './connectors/local';
import remoteConnectorCreator from './connectors/remote';
import repositoryCreator from './repository/memory';
import {
  ICliModule, IElementFormatted,
} from './typings';
import worldCreator from './world';

const cliModule: ICliModule =
(args) => {
  const params: IParserOptions = argsParser(args);
  const connectorCreators: any = {
    0: remoteConnectorCreator({
      debug: params.debug,
      baseURL: 'https://raw.githubusercontent.com/rmoliva/orion/master/definitions/',
    }),
    1: localConnectorCreator({
      rootPath: './definitions',
    }),
  };

  const world = worldCreator({
    locale: params.locale,
    connector: connectorCreators[params.connector],
    repository: repositoryCreator({
      locale: params.locale,
      elements: {},
    }),
  });

  const get: () => Bluebird<IElementFormatted[]> =
  () => {
    if (R.isNil(program.namespace) || R.isNil(program.type)) {
      return Bluebird.reject('Argument missing');
    }

    return world.get({
      search: [{
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
