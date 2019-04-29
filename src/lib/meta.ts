import Bluebird from 'bluebird';
import metaPersistenceModule from './meta/persistence';
import metaCategoryModule from './meta/search/category';
import metaIdModule from './meta/search/id';
import {
  IMetaCategoryResult,
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

  const categories: () => Bluebird<Array<number | string>> =
    () => persistence.read().then((definition: IMetaDefinition) => {
      return metaCategoryModule({ definition }).list();
    });

  const getCategory: (category: string) => Bluebird<IMetaCategoryResult[]> =
    (category) => persistence.read().then((definition: IMetaDefinition) => {
      return metaCategoryModule({ definition }).search(category);
    });

  return {
    getById,
    categories,
    getCategory,
  };
};

export default metaModule;
