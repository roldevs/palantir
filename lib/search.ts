import Bluebird from 'bluebird';
import {
  IOptionalElementDefinition,
  ISearchDefinition,
  ISearchModule,
} from './typings';
import {
  compactArray,
  defaultToNull,
  randomFromArray,
} from './utils';

const searchModule: ISearchModule =
(world) => {
  const getOne: (search: ISearchDefinition) => Bluebird<IOptionalElementDefinition> =
  (search) => {
    return world.connector.get({
      locale: world.locale,
      ns: search.ns,
      type: search.type,
    });
  };

  const find: (search: ISearchDefinition[]) => Bluebird<IOptionalElementDefinition> =
  (search) => {
    return Bluebird.map(
      search,
      getOne,
    ).then((elements: IOptionalElementDefinition[]) => {
      // TODO: Use Ramda composition
      return defaultToNull(randomFromArray(compactArray(elements)));
    });
  };

  return {
    find,
  };
};

export default searchModule;
