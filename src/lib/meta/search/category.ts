import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IMetaCategoryModule,
  IMetaCategoryResult,
  ISearchDefinition,
} from '../../typings';

const metaCategoryModule: IMetaCategoryModule =
(options) => {
  const getLocators: (category: string) => ISearchDefinition[] =
    (category) => options.definition.categories[category];

  const getNs: (locator: ISearchDefinition) => string = R.view(R.lensProp('ns'));

  const getMetaCategoryResult: (locator: ISearchDefinition) => IMetaCategoryResult =
    (locator) => {
      return {
        ns: getNs(locator),
        locators: [locator],
      };
    };

  const unpackedResult: (category: string)  => IMetaCategoryResult[] =
    (category) => R.map(getMetaCategoryResult, getLocators(category));

  const findNsIndex: (ns: string) => (list: IMetaCategoryResult[]) => number =
    (ns) => R.findIndex(R.propEq('ns', ns));

  const addlocator: (locator: ISearchDefinition) => (item: IMetaCategoryResult) => IMetaCategoryResult =
    (locator) => (item) => {
      return {
        ns: getNs(locator),
        locators: R.append(locator, item.locators),
      };
    };

  const updateCategoryResult: (acc: IMetaCategoryResult[], item: IMetaCategoryResult) => IMetaCategoryResult[] =
  (acc, item) => {
    const index: number = findNsIndex(item.ns)(acc);
    if (index > 0) {
      return R.update(index, addlocator(item.locators[0])(acc[index]), acc);
    }
    return R.append(item, acc);
  };

  const searchResult: (category: string) => IMetaCategoryResult[] =
    (category) => R.reduce<IMetaCategoryResult, IMetaCategoryResult[]>(
      updateCategoryResult,
      [],
      unpackedResult(category),
    );

  const getCategories: () => (string | number)[] = () => R.keys(options.definition.categories);

  const search: (category: string) => Bluebird<IMetaCategoryResult[]> =
    (category) => Bluebird.resolve(searchResult(category));

  const list: () => Bluebird<(string | number)[]> =
    () => Bluebird.resolve(getCategories());

  return {
    search,
    list,
  };
};

export default metaCategoryModule;
