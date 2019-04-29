import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IMetaCathegoryModule,
  IMetaCathegoryResult,
  ISearchDefinition,
} from '../../typings';

const metaCathegoryModule: IMetaCathegoryModule =
(options) => {
  const getLocators: (cathegory: string) => ISearchDefinition[] =
    (cathegory) => options.definition.categories[cathegory];

  const getNs: (locator: ISearchDefinition) => string = R.view(R.lensProp('ns'));

  const getMetaCathegoryResult: (locator: ISearchDefinition) => IMetaCathegoryResult =
    (locator) => {
      return {
        ns: getNs(locator),
        locators: [locator],
      };
    };

  const unpackedResult: (cathegory: string)  => IMetaCathegoryResult[] =
    (cathegory) => R.map(getMetaCathegoryResult, getLocators(cathegory));

  const findNsIndex: (ns: string) => (list: IMetaCathegoryResult[]) => number =
    (ns) => R.findIndex(R.propEq('ns', ns));

  const addlocator: (locator: ISearchDefinition) => (item: IMetaCathegoryResult) => IMetaCathegoryResult =
    (locator) => (item) => {
      return {
        ns: getNs(locator),
        locators: R.append(locator, item.locators),
      };
    };

  const updateCathegoryResult: (acc: IMetaCathegoryResult[], item: IMetaCathegoryResult) => IMetaCathegoryResult[] =
  (acc, item) => {
    const index: number = findNsIndex(item.ns)(acc);
    if (index > 0) {
      return R.update(index, addlocator(item.locators[0])(acc[index]), acc);
    }
    return R.append(item, acc);
  };

  const searchResult: (cathegory: string) => IMetaCathegoryResult[] =
    (cathegory) => R.reduce<IMetaCathegoryResult, IMetaCathegoryResult[]>(
      updateCathegoryResult,
      [],
      unpackedResult(cathegory),
    );

  const getCathegories: () => Array<string | number> = () => R.keys(options.definition.categories);

  const search: (cathegory: string) => Bluebird<IMetaCathegoryResult[]> =
    (cathegory) => Bluebird.resolve(searchResult(cathegory));

  const list: () => Bluebird<Array<string | number>> =
    () => Bluebird.resolve(getCathegories());

  return {
    search,
    list,
  };
};

export default metaCathegoryModule;
