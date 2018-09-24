import Bluebird from 'bluebird';
import elementCreator from './element';
import randomCreator from './random';
import {
  IOptionalElement,
  IOptionalElementDefinition,
  ISearchDefinition,
  IWorldModule,
} from './typings';

const worldModule: IWorldModule =
(world) => {
  const elementObject = elementCreator(world);

  const get: (search: ISearchDefinition[]) => Bluebird<IOptionalElementDefinition | IOptionalElement> =
  (search) => randomCreator(world).random(search).then(elementObject.get);

  return {
    get,
  };
};

export default worldModule;
