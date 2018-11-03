import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  ERandomOption,
  ISearchByTypeModule,
  ISearchDefinition,
  ISearchResult,
} from '../typings';
import {
  compactArray,
  defaultToNull,
  randomFromArray,
} from '../utils';
import {
  isSearchType, isSearchTypeOrAll,
} from './util';

const searchExistingModule: ISearchByTypeModule =
(world) => {
  const doSearch: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    return world.repository.search(search);
  };

  const find: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    if (isSearchTypeOrAll(search, ERandomOption.existing)) {
      return doSearch(search);
    }
    return Bluebird.resolve([]);
  };

  return {
    find,
  };
};

export default searchExistingModule;
