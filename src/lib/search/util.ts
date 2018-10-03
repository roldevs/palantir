import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  ERandomOption,
  ISearchDefinition,
} from '../typings';
import {
  compactArray,
  defaultToNull,
  randomFromArray,
} from '../utils';

const searchType: (search: ISearchDefinition) => string =
(search) => {
  return R.defaultTo(ERandomOption.definition, search.random!);
};

const isSearchType: (search: ISearchDefinition, type: ERandomOption) => boolean =
(search, type) => R.equals(searchType(search), type);

export {
  searchType,
  isSearchType,
};
