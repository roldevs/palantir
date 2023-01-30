import Bluebird from 'bluebird';
import * as R from 'ramda';
import distributeModule from '../distribute';
import elementModule from '../element';
import {
  IOptionalElementDefinition,
  IOptionsModule,
} from '../typings';
import { randomFromArray } from '../utils';
import { hasOptions } from './utils';

const optionsModule: IOptionsModule =
(world) => {
  const getElement: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => {
      if (R.isNil(element)) {
        return Bluebird.resolve(null);
      }
      return elementModule(world).get(element);
    };

  const get: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => Bluebird.resolve(randomFromArray(
      distributeModule(element!.options!).get(),
    )).then((option: IOptionalElementDefinition) => {
      if (!option) return Bluebird.resolve(null);
      return element ? getElement(R.set(R.lensProp('parent'), element, option)) : getElement(option);
    });

  const random: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => hasOptions(element) ? get(element) : Bluebird.resolve(null);

  return {
    random, // Returns a random element from the passed options
  };
};

export default optionsModule;
