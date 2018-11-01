import Bluebird from 'bluebird';
import diceModule from './element/dice';
import optionsModule from './element/options';
import relatedModule from './element/related';
import { hasDice, hasOptions, hasRelated } from './element/utili';
import {
  IElementModule,
  IOptionalElement,
  IOptionalElementDefinition,
} from './typings';

const elementModule: IElementModule =
(world) => {
  const options = optionsModule(world);
  const related = relatedModule(world);
  const dice = diceModule(world);

  const get: (element: IOptionalElementDefinition | IOptionalElement) => Bluebird<IOptionalElementDefinition> =
  (element) => {
    // TODO: IOptionalElement
    if (hasRelated(element as IOptionalElementDefinition)) {
      return related.fetch(element as IOptionalElementDefinition);
    }
    if (hasOptions(element as IOptionalElementDefinition)) {
      return options.random(element as IOptionalElementDefinition);
    }
    if (hasDice(element as IOptionalElementDefinition)) {
      return dice.roll(element as IOptionalElementDefinition);
    }
    return Bluebird.resolve(element as IOptionalElementDefinition);
  };

  return {
    get,
  };
};

export default elementModule;
