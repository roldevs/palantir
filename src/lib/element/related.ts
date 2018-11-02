import Bluebird from 'bluebird';
import * as R from 'ramda';
import elementModule from '../element';
import randomModule from '../random';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IRelatedElement,
  IRelatedElements,
  IRelatedModule,
  ISearchDefinition,
  IWorldDefinition,
} from '../typings';
import { compactArray, deepMerge } from '../utils';
import { hasRelated, optionCount } from './utili';

const searchElement: (world: IWorldDefinition, search: ISearchDefinition[]) => Bluebird<IOptionalElementDefinition> =
  (world, search) => randomModule(world).random(search).then(elementModule(world).get);

const oneRelated: (world: IWorldDefinition, related: IRelatedElement) => Bluebird<IRelatedElement> =
(world, related) => {
  return Bluebird.all(
    R.times(() => searchElement(world, related.search), optionCount(related)),
  ).then((results: IOptionalElementDefinition[]) => {
    return R.set(R.lensProp('results'), compactArray(results), related);
  });
};

const processRelated: (world: IWorldDefinition, relatedMap: IRelatedElements) => Bluebird<IRelatedElements> =
(world, relatedMap) => {
  return Bluebird.map(
    R.keys(relatedMap) as string[],
    (key: string) => {
      return oneRelated(world, relatedMap[key]).then((related: IRelatedElement) => {
        return R.set(R.lensProp(key), related, relatedMap);
      });
    },
  ).then(deepMerge);
};

const relatedModule: IRelatedModule =
(world) => {
  const getElement: (element: IElementDefinition) => Bluebird<IElementDefinition> =
  (element) => {
    return processRelated(world, element!.related!).then((related: IRelatedElements) => {
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
