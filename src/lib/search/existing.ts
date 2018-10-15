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
  isSearchType,
} from './util';

const searchExistingModule: ISearchByTypeModule =
(world) => {
  const doSearch: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    return world.repository.search(search);
  };

  const find: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    if (
      isSearchType(search, ERandomOption.existing) ||
      isSearchType(search, ERandomOption.all)
    ) {
      return doSearch(search);
    }
    return Bluebird.resolve([]);
  };

  return {
    find,
  };
};

export default searchExistingModule;
