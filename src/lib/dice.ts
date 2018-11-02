// https://wiki.roll20.net/Dice_Reference#Roll20_Dice_Specification
import Bluebird from 'bluebird';
import { Dice, DiceResult } from 'dice-typescript';
import * as R from 'ramda';
import {
  IDiceModule,
  IOptionalElementDefinition,
} from './typings';

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

export {
  rollDice,
};
