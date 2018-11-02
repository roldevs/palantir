import Bluebird from 'bluebird';
import { rollDice } from '../dice';
import {
  IDiceModule,
  IOptionalElementDefinition,
} from '../typings';
import { hasDice } from './utili';

const diceModule: IDiceModule =
(_) => {
  const roll: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => hasDice(element) ? rollDice(element!.dice!) : Bluebird.resolve(null);

  return {
    roll, // Returns a random element from the passed options
  };
};

export default diceModule;
