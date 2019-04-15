import Bluebird from 'bluebird';
import YAML from 'yaml';
import { readFile, unlinkFile, writeFile } from '../file';
import {
  IMetaDefinition,
  IMetaPersistenceModule,
} from '../typings';
import { MetaProcessorModule } from './processor';

const metaPersistenceModule: IMetaPersistenceModule =
(options) => {
  const generate: () => Bluebird<IMetaDefinition> =
  () => {
    return options.connector.list().then(
      MetaProcessorModule(
        options.connector,
        {ids: {}, categories: {}},
      ).process,
    );
  };

  const write: () => Bluebird<IMetaDefinition> =
  () => unlinkFile(options.metaFilePath).then(generate).then((meta: IMetaDefinition) => {
    writeFile(options.metaFilePath, YAML.stringify(meta));
    return meta;
  });

  const read: () => Bluebird<IMetaDefinition> =
  () => readFile(options.metaFilePath).then((data: string) => {
    return YAML.parse(data);
  });

  return {
    generate,
    read,
    write,
  };
};

export default metaPersistenceModule;
