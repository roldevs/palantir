import Bluebird from 'bluebird';
import metaPersistenceModule from './meta/persistence';
import metaCathegoryModule from './meta/search/cathegory';
import metaIdModule from './meta/search/id';
import {
  IMetaCathegoryResult,
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

  const cathegories: () => Bluebird<Array<number | string>> =
    () => persistence.read().then((definition: IMetaDefinition) => {
      return metaCathegoryModule({ definition }).list();
    });

  const getCathegory: (cathegory: string) => Bluebird<IMetaCathegoryResult[]> =
    (cathegory) => persistence.read().then((definition: IMetaDefinition) => {
      return metaCathegoryModule({ definition }).search(cathegory);
    });

  return {
    getById,
    cathegories,
    getCathegory,
  };
};

export default metaModule;
