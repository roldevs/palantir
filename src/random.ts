import * as R from 'ramda';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from './typings';

const random: (options: Array<IElement | IElementDefinition>) => any =
(options) => {

  const get: () => IElement | IElementDefinition =
  () => options[Math.floor(Math.random() * options.length)];

  return { get };
};

export = random;
