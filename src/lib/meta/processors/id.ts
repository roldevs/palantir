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

const MetaProcessorId: TMetaProcessor =
(metaDefinition) => {
  const process: (
    metaHeader: IMeta,
    locator: ISearchDefinition,
    connector: IConnectorFactory,
  ) => Bluebird<IMetaDefinition> =
  (metaHeader, locator, _connector) => Bluebird.resolve(
    R.set(R.lensPath(['ids', metaHeader.id!]), locator, metaDefinition),
  );

  return {
    process,
  };
};

export default MetaProcessorId;
