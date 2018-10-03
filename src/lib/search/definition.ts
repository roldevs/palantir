import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  ERandomOption,
  IOptionalElementDefinition,
  ISearchByTypeModule,
  ISearchDefinition,
  ISearchResult,
} from '../typings';
import {
  compactArray,
} from '../utils';
import {
  isSearchType,
} from './util';

const searchDefinitionModule: ISearchByTypeModule =
(world) => {
  const doSearch: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    return world.connector.get({
      locale: world.locale,
      ns: search.ns,
      type: search.type,
    }).then((element: IOptionalElementDefinition) => {
      // Transform to array
      return compactArray([element]);
    });
  };

  const find: (search: ISearchDefinition) => Bluebird<ISearchResult> =
  (search) => {
    if (!isSearchType(search, ERandomOption.definition)) {
      return Bluebird.resolve([]);
    }
    return doSearch(search);
  };

  return {
    find,
  };
};

export default searchDefinitionModule;
