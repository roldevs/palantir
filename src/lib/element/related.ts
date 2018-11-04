import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IRelatedElement,
  IRelatedElements,
  IRelatedModule,
} from '../typings';
import { deepMerge } from '../utils';
import relatedDiceModule from './related/dice';
import relatedSearchModule from './related/search';
import { hasRelated, relatedHasDice } from './utils';

const relatedModule: IRelatedModule =
(world) => {
  const relatedPromise: (related: IRelatedElement, parent: IElementDefinition) => Bluebird<IRelatedElement> =
  (related, parent) => {
    if (relatedHasDice(related)) {
      return relatedDiceModule(world).get(related);
    }
    return relatedSearchModule(world).get(related, parent);
  };

  const processRelated: (relatedMap: IRelatedElements, parent: IElementDefinition) => Bluebird<IRelatedElements> =
  (relatedMap, parent) => {
    return Bluebird.map(
      R.keys(relatedMap) as string[],
      (key: string) => {
        return relatedPromise(relatedMap[key], parent).then((related: IRelatedElement) => {
          return R.set(R.lensProp(key), related, relatedMap);
        });
      },
    ).then(deepMerge);
  };

  const getElement: (element: IElementDefinition) => Bluebird<IElementDefinition> =
  (element) => {
    return processRelated(element!.related!, element).then((related: IRelatedElements) => {
      return R.set(R.lensProp('related'), related, element);
    });
  };

  const fetch: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
  (element) => {
    if (hasRelated(element)) {
      return getElement(element!);
    }
    return Bluebird.resolve(element);
  };

  return {
    fetch,
  };
};

export default relatedModule;
