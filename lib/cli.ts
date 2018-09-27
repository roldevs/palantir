import Bluebird from 'bluebird';
import program from 'commander';
import * as R from 'ramda';
import localConnectorCreator from './connectors/local';
import remoteConnectorCreator from './connectors/remote';
import formatterCreator from './formatter/cli';
import repositoryCreator from './repository/memory';

import {
  ICliModule,
  IFormattedResult,
} from './typings';
import worldCreator from './world';

const cliModule: ICliModule =
(args) => {
  program
    .version('0.0.1', '-v, --version')
    .option('-l, --locale [locale]', "Locale (defaults to 'es')")
    .option('-n, --namespace [namespace]', 'Namespace')
    .option('-t, --type [type]', 'Type')
    .option('-c, --count [count]', 'Number of generated elements (defaults to 1)', parseInt)
    .option('-d, --debug [debug]', 'Debug (defaults to false)')
    .option('-s, --connector [connector]', '0-Remote, 1-Local (defaults to 0)')
    .parse(args);

  const locale: string = R.defaultTo('es', program.locale);
  const count: number = R.defaultTo(1, program.count);
  const debug: boolean = R.defaultTo(false, program.debug) === 'true';
  const connector: number = R.defaultTo(0, program.connector);
  const connectorCreators: any = {
    0: remoteConnectorCreator({
      debug,
      baseURL: 'https://raw.githubusercontent.com/rmoliva/orion/master/definitions/',
    }),
    1: localConnectorCreator({
      rootPath: './definitions',
    }),
  };

  const world = worldCreator({
    locale,
    connector: connectorCreators[connector],
    repository: repositoryCreator({
      locale,
      elements: {},
    }),
  });
  const formatter = formatterCreator();

  const get: () => Bluebird<IFormattedResult[]> =
  () => {
    if (R.isNil(program.namespace) || R.isNil(program.type)) {
      return Bluebird.reject('Argument missing');
    }

    return world.get({
      search: [{
        ns: program.namespace,
        type: program.type,
      }],
      count,
    }).then(formatter.format as any);
  };

  return {
    get,
  };
};

export default cliModule;
