import Bluebird from 'bluebird';
import * as R from 'ramda';
import counterModule from '../../counter';
import diceModule from '../../dice';
import {
  IOptionalElementDefinition,
  IRelatedDiceModule,
  IRelatedElement,
} from '../../typings';
import { compactArray } from '../../utils';

const relatedDiceModule: IRelatedDiceModule =
(_) => {
  const rollElement: (diceDef: string) => Bluebird<IOptionalElementDefinition> =
    (diceDef) => diceModule(diceDef).rollElement();

  const get: (related: IRelatedElement) => Bluebird<IRelatedElement> =
  (related) => {
    return Bluebird.all(
      R.times(() => rollElement(related.dice!), counterModule(related.count).get()),
    ).then((results: IOptionalElementDefinition[]) => {
      return R.set(R.lensProp('results'), compactArray(results), related);
    });
  };

  return {
    get,
  };
};

export default relatedDiceModule;
