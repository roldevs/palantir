import Bluebird from 'bluebird';
import * as R from 'ramda';
import counterModule from '../../counter';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IRelatedElement,
  IRelatedOptionsModule,
} from '../../typings';
import { compactArray } from '../../utils';
import optionsModule from '../options';

const relatedOptionsModule: IRelatedOptionsModule =
(world) => {
  const getOption: (element: IRelatedElement) => Bluebird<IOptionalElementDefinition> =
  (element) => {
    return optionsModule(world).random(element as IElementDefinition);
  };

  const get: (related: IRelatedElement, parent: IElementDefinition) => Bluebird<IRelatedElement> =
  (related) => {
    return Bluebird.all(
      R.times(() => getOption(related), counterModule(related.count).get()),
    ).then((results: IOptionalElementDefinition[]) => {
      return R.set(R.lensProp('results'), compactArray(results), related);
    });
  };

  return {
    get,
  };
};

export default relatedOptionsModule;
