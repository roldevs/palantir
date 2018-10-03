import Bluebird from 'bluebird';
import * as R from 'ramda';
import elementCreator from './element';
import randomCreator from './random';
import {
  IOptionalElement,
  IOptionalElementDefinition,
  IRelatedElement,
  IWorldModule,
} from './typings';

const worldModule: IWorldModule =
(world) => {
  const elementObject = elementCreator(world);

  const optionCount: (relatedElement: IRelatedElement) => any =
    R.compose(R.defaultTo(1), R.view(R.lensProp('count')));

  const get: (search: IRelatedElement) => Bluebird<Array<IOptionalElementDefinition | IOptionalElement>> =
  (search) => {
    return Bluebird.all(
      R.times(() => randomCreator(world).random(search.search).then(elementObject.get), optionCount(search)),
    );
  };

  return {
    get,
  };
};

export default worldModule;
