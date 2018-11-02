import Bluebird from 'bluebird';
import * as R from 'ramda';
import elementCreator from './element';
import { elementFormatter } from './formatter/elementFormatter';
import randomCreator from './random';
import {
  IElementFormatted,
  IOptionalElement,
  IOptionalElementDefinition,
  IRelatedElement,
  IWorldModule,
} from './typings';
import { compactArray, randomFromArray } from './utils';

const worldModule: IWorldModule =
(world) => {
  const elementObject = elementCreator(world);

  const optionCount: (relatedElement: IRelatedElement) => any =
    R.compose(R.defaultTo(1), R.view(R.lensProp('count')));

  const getOne: (search: IRelatedElement) => () => Bluebird<IElementFormatted | null> =
  (search) => () => {
    return randomCreator(world).random(search.search).then((option: IOptionalElement | IOptionalElementDefinition ) => {
      return elementObject.get(option).then(
        (element: IOptionalElementDefinition) => elementFormatter().format(element!, option),
      );
    });
  };

  const compact: (elements: Array<IElementFormatted | null>) => IElementFormatted[] = compactArray;

  const get: (search: IRelatedElement) => Bluebird<IElementFormatted[]> =
  (search) => {
    return Bluebird.all(
      R.times(getOne(search), optionCount(search)),
    ).then(compact);
  };

  return {
    get,
  };
};

export default worldModule;
