import Bluebird from 'bluebird';
import {
  IMetaDefinition,
  IMetaFactory,
  IMetaOptions,
  IMetaTestModule,
  ISearchDefinition,
} from '../typings';

const metaTestModule: IMetaTestModule =
() => {
  const getById: (id: string) => Bluebird<ISearchDefinition[]> =
  (_) =>  Bluebird.resolve([]);

  return {
    getById,
  };
};

export default metaTestModule;
