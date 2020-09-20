import R from 'ramda';
import {
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
  IConnectorFactory,
} from '../../typings';
import {
  TMetaProcessor,
} from '../processor';
import Bluebird from 'bluebird';

const MetaProcessorCategory: TMetaProcessor =
(metaDefinition) => {
  const appendPage: (locator: ISearchDefinition) => (acc: IMetaDefinition, page: string) => IMetaDefinition =
  (locator) => (acc, page) => R.set(R.lensPath(['categories', page]), R.append(locator, acc.categories[page]), acc);

  const process: (
    metaHeader: IMeta,
    locator: ISearchDefinition,
    connector: IConnectorFactory,
  ) => Bluebird<IMetaDefinition> =
  (metaHeader, locator, _connector) => Bluebird.resolve(
    R.reduce(appendPage(locator), metaDefinition, metaHeader.categories! || []),
  );

  return {
    process,
  };
};

export default MetaProcessorCategory;
