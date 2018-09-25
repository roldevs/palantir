import Bluebird from 'bluebird';
import program from 'commander';
import connectorCreator from './connectors/remote';
import repositoryCreator from './repository/memory';
import {
  ICliModule,
  IOptionalElement,
  IOptionalElementDefinition,
} from './typings';
import worldCreator from './world';

const cliModule: ICliModule =
(args) => {
  const world = worldCreator({
    locale: 'es',
    connector: connectorCreator({
      baseURL: 'https://raw.githubusercontent.com/rmoliva/orion/master/definitions/',
    }),
    repository: repositoryCreator({
      locale: 'es',
      elements: {},
    }),
  });

  const get: () => Bluebird<Array<IOptionalElementDefinition | IOptionalElement>> =
  () => {
    program
      .version('0.0.1', '-v, --version')
      .option('-n, --namespace [namespace]', 'Namespace')
      .option('-t, --type [type]', 'Type')
      .option('-c, --count [count]', 'Number of generated elements', parseInt)
      .parse(args);

    return world.get({
      search: [{
        ns: program.namespace,
        type: program.type,
      }],
      count: program.count,
    });
  };

  return {
    get,
  };
};

export default cliModule;
