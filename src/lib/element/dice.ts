import Bluebird from 'bluebird';
import diceModule from '../dice';
import {
  IDiceModule,
  IElementDiceModule,
  IOptionalElementDefinition,
} from '../typings';
import { hasDice } from './utils';

const diceElementModule: IElementDiceModule =
(_) => {
  const roll: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => hasDice(element) ?
      diceModule(element!.dice!).rollElement() :
      Bluebird.resolve(null);

  return {
    roll, // Returns a random element from the passed options
  };
};

export default diceElementModule;
