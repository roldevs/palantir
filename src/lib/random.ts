import Bluebird from 'bluebird';
import searchModule from './search';
import {
  IOptionalElement,
  IOptionalElementDefinition,
  IRandomModule,
  ISearchDefinition,
} from './typings';
import { randomFromArray } from './utils';

const randomModule: IRandomModule =
(world) => {
  const random: (search: ISearchDefinition[]) => Bluebird<IOptionalElement | IOptionalElementDefinition> =
  (search) => searchModule(world).find(search).then(randomFromArray);

  return {
    random, // Returns a random element from the passed options
  };
};

export default randomModule;
