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

const MetaProcessorId: TMetaProcessor =
(metaDefinition) => {
  const process: (metaHeader: IMeta, locator: ISearchDefinition) => IMetaDefinition =
  (metaHeader, locator) => {
    return R.set(R.lensPath(['ids', metaHeader.id!]), locator, metaDefinition);
  };

  return {
    process,
  };
};

export default MetaProcessorId;
