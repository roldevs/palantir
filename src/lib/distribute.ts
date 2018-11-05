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
  () => R.flatten<IElementDefinition>(R.map(generateElements, elements));

  return {
    get,
  };
};

export default distributeModule;
