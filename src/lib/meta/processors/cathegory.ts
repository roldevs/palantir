import Bluebird from 'bluebird';
import R from 'ramda';
import {
  IMeta,
  IMetaDefinition,
  IMetaFactory,
  IMetaOptions,
  IMetaTestModule,
  ISearchDefinition,
  ISearchResult,
} from '../../typings';
import {
  TMetaProcessor,
} from '../processor';

const MetaProcessorCathegory: TMetaProcessor =
(metaDefinition) => {
  const appendPage: (locator: ISearchDefinition) => (acc: IMetaDefinition, page: string) => IMetaDefinition =
  (locator) => (acc, page) => R.set(R.lensPath(['categories', page]), R.append(locator, acc.categories[page]), acc);

  const process: (metaHeader: IMeta, locator: ISearchDefinition) => IMetaDefinition =
  (metaHeader, locator) => R.reduce(appendPage(locator), metaDefinition, metaHeader.categories! || []);

  return {
    process,
  };
};

export default MetaProcessorCathegory;
