import Bluebird from 'bluebird';
import * as R from 'ramda';
import counterModule from './counter';
import elementCreator from './element';
import { elementFormatter } from './formatter/elementFormatter';
import metaModule from './meta';
import randomCreator from './random';
import {
  IElementFormatted,
  IOptionalElement,
  IOptionalElementDefinition,
  IRelatedElement,
  IWorldDefinition,
  IWorldModule,
} from './typings';
import { compactArray } from './utils';

const compact: (elements: Array<IElementFormatted | null>) => IElementFormatted[] = compactArray;

const getOne: (world: IWorldDefinition, search: IRelatedElement) => () => Bluebird<IElementFormatted | null> =
(world, search) => () => randomCreator(world).random(search.search!).then(
  (option: IOptionalElement | IOptionalElementDefinition ) => {
    return elementCreator(world).get(option).then(
      (element: IOptionalElementDefinition) => elementFormatter().format(element!, option),
    );
  },
);

const worldModule: IWorldModule =
(world) => {
  const get: (search: IRelatedElement) => Bluebird<IElementFormatted[]> =
  (search) => {
    return Bluebird.all(
      R.times(getOne(world, search), counterModule(search.count).get()),
    ).then(compact);
  };

  const getById: (id: string) => Bluebird<IElementFormatted[]> =
  (_) => {
    return Bluebird.resolve([]);
  };

  return {
    get,
    getById,
  };
};

export default worldModule;
