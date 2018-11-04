import Bluebird from 'bluebird';
import * as R from 'ramda';
import counterModule from '../../counter';
import elementModule from '../../element';
import randomModule from '../../random';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IRelatedElement,
  IRelatedSearchModule,
  ISearchDefinition,
} from '../../typings';
import { compactArray } from '../../utils';

const relatedSearchModule: IRelatedSearchModule =
(world) => {
  const searchElement: (search: ISearchDefinition[]) => Bluebird<IOptionalElementDefinition> =
    (search) => randomModule(world).random(search).then(elementModule(world).get);

  const get: (related: IRelatedElement, parent: IElementDefinition) => Bluebird<IRelatedElement> =
  (related) => {
    return Bluebird.all(
      R.times(() => searchElement(related.search!), counterModule(related.count).get()),
    ).then((results: IOptionalElementDefinition[]) => {
      return R.set(R.lensProp('results'), compactArray(results), related);
    });
  };

  return {
    get,
  };
};

export default relatedSearchModule;
