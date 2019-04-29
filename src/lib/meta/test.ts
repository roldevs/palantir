import Bluebird from 'bluebird';
import {
  IMetaCathegoryResult,
  IMetaTestModule,
  ISearchDefinition,
} from '../typings';

const metaTestModule: IMetaTestModule =
() => {
  const getById: (id: string) => Bluebird<ISearchDefinition[]> =
    (_) =>  Bluebird.resolve([]);

  const cathegories: () => Bluebird<Array<number | string>> =
    () =>  Bluebird.resolve([]);

  const getCathegory: (cathegory: string) => Bluebird<IMetaCathegoryResult[]> =
    (_) =>  Bluebird.resolve([]);

  return {
    getById,
    cathegories,
    getCathegory,
  };
};

export default metaTestModule;
