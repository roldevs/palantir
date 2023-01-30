import Bluebird from 'bluebird';
import * as R from 'ramda';
import { Dictionary } from 'ramda';
import counterModule from './counter';
import elementCreator from './element';
import { elementFormatter } from './formatter/elementFormatter';
import randomCreator from './random';
import {
  IMetaCategoryResult,
  IOptionalElement,
  IOptionalElementDefinition,
  IRelatedElement,
  ISearchDefinition,
  IWorldDefinition,
  IWorldElement,
  IWorldModule,
} from './typings';
import { compactArray } from './utils';

// const compact: (elements: (IWorldElement | null)[]) => IWorldElement[] = compactArray;

const getOne: (world: IWorldDefinition, search: ISearchDefinition[]) => () => Bluebird<IWorldElement | null> =
(world, search) => () => randomCreator(world).random(search).then(
  (option: IOptionalElement | IOptionalElementDefinition ) => {
    return elementCreator(world).get(option).then(
      (element: IOptionalElementDefinition) => {
        if (element) {
          return {format: elementFormatter().format(element!, option)};
        }
        return null;
      },
    );
  },
);

const getSearchById: (world: IWorldDefinition) => (id: string) => Bluebird<(IWorldElement | null)[]> =
(world) => (id) => {
  return world.meta.getById(id).then((search: ISearchDefinition[]) => {
    return getOne(world, search)();
  }).then((element: IWorldElement | null) => {
    return compactArray([element]);
  });
};

const worldModule: IWorldModule =
(world) => {
  const get: (search: IRelatedElement) => Bluebird<Dictionary<any>> =
  (search) => {
    return Bluebird.all(
      R.times(getOne(world, search.search!), counterModule(search.count).get()),
    ).then(compactArray);
  };

  const getById: (id: string) => Bluebird<(IWorldElement | null)[]> = getSearchById(world);
  const getByTerm: (term: string) => Bluebird<ISearchDefinition[]> = world.meta.getByTerm;

  const categories: () => Bluebird<(number | string)[]> = world.meta.categories;

  const getCategory: (category: string) => Bluebird<IMetaCategoryResult[]> =
    world.meta.getCategory;

  return {
    get,
    getById,
    getByTerm,
    getCategory,
    categories,
  };
};

export default worldModule;
