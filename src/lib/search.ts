import Bluebird from 'bluebird';
import * as R from 'ramda';
import searchAllModule from './search/all';
import searchDefinitionModule from './search/definition';
import searchExistingModule from './search/existing';
import {
  searchType,
} from './search/util';
import {
  ISearchDefinition,
  ISearchModule,
  ISearchResult,
} from './typings';
import {
  compactArray,
} from './utils';

const searchModule: ISearchModule =
(world) => {
  const fnByType: {
    [t: string]: (search: ISearchDefinition) => Bluebird<ISearchResult>;
  } = {
    all: searchAllModule(world).find,
    definition: searchDefinitionModule(world).find,
    existing: searchExistingModule(world).find,
  };

  const oneSearch: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => fnByType[searchType(search)](search);

  const find: (search: ISearchDefinition[]) => Bluebird<ISearchResult> =
  (search) => {
    return Bluebird.map(
      search,
      oneSearch,
    ).then((elements: ISearchResult[]) => {
      return compactArray(R.flatten(elements));
    });
  };

  return {
    find,
  };
};

export default searchModule;
