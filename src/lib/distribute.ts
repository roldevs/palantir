import Bluebird from 'bluebird';
import * as R from 'ramda';
import elementModule from './element';
import {
  IDistributeModule,
  IElementDefinition,
} from './typings';

const getWeight: (element: IElementDefinition) => number =
(element) => R.defaultTo(1, R.prop('weight', element));

const generateElements: (element: IElementDefinition) => IElementDefinition[] =
(element) => Array(getWeight(element)).fill(element);

const distributeModule: IDistributeModule =
(elements) => {
  const get: () => IElementDefinition[] =
  () => R.flatten(R.map(generateElements, elements)) as IElementDefinition[];

  return {
    get,
  };
};

export default distributeModule;
