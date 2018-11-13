import Bluebird from 'bluebird';
import metaIdModule from './meta/id';
import metaPersistenceModule from './meta/persistence';
import {
  IMetaDefinition,
  IMetaFactory,
  IMetaOptions,
  ISearchDefinition,
} from './typings';

const metaModule: (options: IMetaOptions) => IMetaFactory =
(options) => {
  const persistence = metaPersistenceModule(options);

  const getById: (id: string) => Bluebird<ISearchDefinition[]> =
  (id) =>  persistence.read().then((metaDefinition: IMetaDefinition) => {
    return metaIdModule(metaDefinition).search(id);
  });

  return {
    getById,
  };
};

export default metaModule;
