import Bluebird from 'bluebird';
import {
  IConnectorFactory,
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
} from '../typings';
import MetaProcessorCategory from './processors/category';
import MetaProcessorId from './processors/id';
import MetaProcessorDirectory from './processors/directory';

type TMetaProcessorFunction = (
  metaHeader: IMeta,
  locator: ISearchDefinition,
  connector: IConnectorFactory,
) => Bluebird<IMetaDefinition>;

type TMetaProcessor = (
  metaDefinition: IMetaDefinition,
) => {
  process: TMetaProcessorFunction;
};

type TMetaProcessorModule = (
    connector: IConnectorFactory,
    metaDefinition: IMetaDefinition,
) => {
  process: (searchDefinition: ISearchDefinition[]) => Bluebird<IMetaDefinition>;
};

const MetaProcessorModule: TMetaProcessorModule =
(connector, metaDefinition) => {
  const processors: TMetaProcessor[] = [
    MetaProcessorId,
    MetaProcessorCategory,
    MetaProcessorDirectory,
  ];

  const processDefinition: (
    metaDefinition: IMetaDefinition,
    locator: ISearchDefinition,
    processor: TMetaProcessor,
  ) =>
    (meta: IMeta) => Bluebird<IMetaDefinition> =
    (definition, locator, processor) => (meta) => processor(definition).process(meta, locator, connector);

  const processMetaDefinition: (locator: ISearchDefinition) =>
    (acc: IMetaDefinition, processFn: TMetaProcessor) =>
      Bluebird<IMetaDefinition> =
  (locator) => (acc, processor) => connector.meta(locator).then(processDefinition(acc, locator, processor));

  const one: (definition: IMetaDefinition, locator: ISearchDefinition) => Bluebird<IMetaDefinition> =
  (definition, locator) => {
    return Bluebird.reduce(
      processors,
      processMetaDefinition(locator),
      definition,
    );
  };

  const process: (locators: ISearchDefinition[]) => Bluebird<IMetaDefinition> =
  (locators) => {
    return Bluebird.reduce(
      locators,
      one,
      metaDefinition,
    );
  };

  return {
    process,
  };
};

export {
  IMeta,
  TMetaProcessor,
  MetaProcessorModule,
};
