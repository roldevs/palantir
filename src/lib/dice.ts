// https://wiki.roll20.net/Dice_Reference#Roll20_Dice_Specification
import Bluebird from 'bluebird';
import { Dice, DiceResult } from 'dice-typescript';
import * as R from 'ramda';
import {
  IDiceModule,
  IOptionalElementDefinition,
} from './typings';

const diceModule: IDiceModule =
(diceDef) => {
  const diceResult: (result: DiceResult) => IOptionalElementDefinition =
  (result) => {
    if (R.isEmpty(result.errors)) {
      return { text: result.total.toString() };
    }
    return { text: result.errors.toString() };
  };

  const roll: () => number | null =
  () => {
    const result: DiceResult = (new Dice()).roll(diceDef);
    if (R.isEmpty(result.errors)) {
      return result.total;
    }
    return null;
  };

  const rollElement: () => Bluebird<IOptionalElementDefinition> =
  () => {
    const result: DiceResult = (new Dice()).roll(diceDef);
    return Bluebird.resolve(diceResult(result));
  };

  return {
    roll,
    rollElement,
  };
};

export default diceModule;
