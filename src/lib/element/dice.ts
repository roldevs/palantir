import Bluebird from 'bluebird';
import { Dice, DiceResult } from 'dice-typescript';
import * as R from 'ramda';
import elementModule from '../element';
import {
  IDiceModule,
  IOptionalElementDefinition,
  IOptionsModule,
} from '../typings';
import { randomFromArray } from '../utils';
import { hasDice } from './utili';

const diceModule: IDiceModule =
(_) => {
  const diceResult: (result: DiceResult) => IOptionalElementDefinition =
  (result) => {
    if (R.isEmpty(result.errors)) {
      return { text: result.total.toString() };
    }
    return { text: result.errors.toString() };
  };

  const rollDice: (diceDef: string) => Bluebird<IOptionalElementDefinition> =
  (diceDef) => {
    const result: DiceResult = (new Dice()).roll(diceDef);
    return Bluebird.resolve(diceResult(result));
  };

  const roll: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
    (element) => hasDice(element) ? rollDice(element!.dice!) : Bluebird.resolve(null);

  return {
    roll, // Returns a random element from the passed options
  };
};

export default diceModule;
