import Bluebird from 'bluebird';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IOptionsModule,
} from './typings';
import { randomFromArray } from './utils';

const optionsModule: IOptionsModule =
(_) => {
  const hasOptions: (element: IOptionalElementDefinition) => boolean =
    (element) => !!(element && element!.options);

  const getElement: (element: IOptionalElementDefinition) => IElementDefinition =
    (element) => randomFromArray(element!.options!);

  const random: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => Bluebird.resolve(hasOptions(element) ? getElement(element) : null);

  return {
    hasOptions,
    random, // Returns a random element from the passed options
  };
};

export default optionsModule;
