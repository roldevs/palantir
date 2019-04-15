import Bluebird from 'bluebird';
import {
  IConnectorFactory,
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
} from '../typings';
import MetaProcessorCathegory from './processors/cathegory';
import MetaProcessorId from './processors/id';

type TMetaProcessorFunction = (metaHeader: IMeta, locator: ISearchDefinition) => IMetaDefinition;

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
    MetaProcessorCathegory,
  ];

  const processDefinition: (
    metaDefinition: IMetaDefinition,
    locator: ISearchDefinition,
    processor: TMetaProcessor,
  ) =>
    (meta: IMeta) => IMetaDefinition =
    (definition, locator, processor) => (meta) => processor(definition).process(meta, locator);

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
