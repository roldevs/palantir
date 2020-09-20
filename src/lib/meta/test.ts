import Bluebird from 'bluebird';
import {
  IMetaCategoryResult,
  IMetaTestModule,
  ISearchDefinition,
} from '../typings';

const metaTestModule: IMetaTestModule =
() => {
  const getById: (id: string) => Bluebird<ISearchDefinition[]> =
    (_) =>  Bluebird.resolve([]);

  const getByTerm: (term: string) => Bluebird<ISearchDefinition[]> =
    (_) =>  Bluebird.resolve([]);

  const categories: () => Bluebird<(number | string)[]> =
    () =>  Bluebird.resolve([]);

  const getCategory: (category: string) => Bluebird<IMetaCategoryResult[]> =
    (_) =>  Bluebird.resolve([]);

  return {
    getById,
    getByTerm,
    categories,
    getCategory,
  };
};

export default metaTestModule;
