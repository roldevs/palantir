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
import searchDefinitionModule from './definition';
import searchExistingModule from './existing';
import {
  isSearchType,
} from './util';

const searchAllModule: ISearchByTypeModule =
(world) => {
  const doSearch: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    return searchDefinitionModule(world).find(search).then((elements1: ISearchResult) => {
      return searchExistingModule(world).find(search).then((elements2: ISearchResult) => {
        return R.concat(elements1, elements2);
      });
    });
  };

  const find: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    if (!isSearchType(search, ERandomOption.all)) {
      return Bluebird.resolve([]);
    }
    return doSearch(search);
  };

  return {
    find,
  };
};

export default searchAllModule;
