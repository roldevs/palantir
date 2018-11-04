import Bluebird from 'bluebird';
import * as R from 'ramda';
import diceModule from './dice';
import { ICounterModule } from './typings';

const counterModule: ICounterModule =
(countDef) => {
  const getNumber: (value: number | null | undefined) => number = R.defaultTo(1);

  const get: () => number =
  () => {
    if (R.isNil(countDef)) {
      return getNumber(countDef);
    }

    if (isNaN(countDef as number)) {
      return getNumber(diceModule(countDef! as string).roll());
    }
    return countDef as number;
  };

  return {
    get,
  };
};

export default counterModule;
