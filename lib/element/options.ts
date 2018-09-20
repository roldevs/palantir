import Bluebird from 'bluebird';
import * as R from 'ramda';
import elementModule from '../element';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IOptionsModule,
} from '../typings';
import { randomFromArray } from '../utils';

const optionsModule: IOptionsModule =
(world) => {
  const hasOptions: (element: IOptionalElementDefinition) => boolean =
    (element) => !!(element && element!.options);

  const getElement: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => {
      if (R.isNil(element)) {
        return Bluebird.resolve(null);
      }
      return elementModule(world).get(element);
    };

  const get: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => Bluebird.resolve(randomFromArray(
      element!.options!,
    )).then(getElement);

  const random: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => hasOptions(element) ? get(element) : Bluebird.resolve(null);

  return {
    hasOptions,
    random, // Returns a random element from the passed options
  };
};

export default optionsModule;
