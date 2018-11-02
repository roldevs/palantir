import Bluebird from 'bluebird';
import * as R from 'ramda';
import diceModule from './element/dice';
import optionsModule from './element/options';
import relatedModule from './element/related';
import { hasDice, hasOptions, hasRelated } from './element/utili';
import {
  IElementModule,
  IOptionalElement,
  IOptionalElementDefinition,
  IWorldDefinition,
} from './typings';

const factories: (world: IWorldDefinition) => any =
(world) => {
  return [{
    test: hasRelated,
    promise: relatedModule(world).fetch,
  }, {
    test: hasOptions,
    promise: optionsModule(world).random,
  }, {
    test: hasDice,
    promise: diceModule(world).roll,
  }];
};

const getPromise: (world: IWorldDefinition, element: IOptionalElementDefinition | IOptionalElement) => any =
(world, element) => {
  const factory: any = R.find((f: any) => f.test(element), factories(world));
  if (factory) {
    return factory.promise;
  }
  return Bluebird.resolve;
};

const elementModule: IElementModule =
(world) => {
  const get: (element: IOptionalElementDefinition | IOptionalElement) =>
    Bluebird<IOptionalElementDefinition> =
  (element) => {
    return getPromise(world, element)(element);
  };

  return {
    get,
  };
};

export default elementModule;
