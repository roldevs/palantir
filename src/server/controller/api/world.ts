import * as R from 'ramda';
import localConnectorCreator from '../../../lib/connectors/local';
import metaModule from '../../../lib/meta';
import repositoryCreator from '../../../lib/repository/memory';
import { IMetaFactory, IWorldFactory } from '../../../lib/typings';
import worldCreator from '../../../lib/world';

const getWorld: (config: {
  locale: string;
}) => IWorldFactory =
(config) => {
  const locale: string = R.defaultTo('es', config.locale);
  const meta: IMetaFactory = metaModule({
    rootPath: './definitions',
    metaFilePath: './meta.yml',
  });

  return worldCreator({
    connector: localConnectorCreator({
      rootPath: './definitions',
    }),
    repository: repositoryCreator({
      locale,
      elements: {},
    }),
    meta,
  });
};

export default getWorld;
