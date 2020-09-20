import R from 'ramda';
import {
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
  IConnectorFactory,
  IOptionalElementDefinition,
} from '../../typings';
import {
  TMetaProcessor,
} from '../processor';
import Bluebird from 'bluebird';

const MetaProcessorDirectory: TMetaProcessor =
(metaDefinition) => {
  // const appendPage: (locator: ISearchDefinition) => (acc: IMetaDefinition, page: string) => IMetaDefinition =
  // (locator) => (acc, page) => R.set(R.lensPath(['categories', page]), R.append(locator, acc.categories[page]), acc);

  const process: (
    metaHeader: IMeta,
    locator: ISearchDefinition,
    connector: IConnectorFactory,
  ) => Bluebird<IMetaDefinition> =
  (_metaHeader, _locator, connector) => {
    return connector.list().then((definition: ISearchDefinition[]) => {
      return R.merge(metaDefinition, { directory: definition});
    });
  };

  return {
    process,
  };
};

export default MetaProcessorDirectory;
