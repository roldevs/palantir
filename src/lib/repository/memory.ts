import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IElement,
  IOptionalElement,
  IRepositoryFactory,
  IRepositoryOptions,
  ISearchDefinition,
  uuid,
} from '../typings';
import {
  defaultToEmptyArray,
  defaultToNull,
} from '../utils';

const memoryRepository: (options: IRepositoryOptions) => IRepositoryFactory =
(options) => {

  const elementsByLocale: () => IElement[] =
  () => defaultToEmptyArray(R.prop(options.locale, options.elements));

  const guidEq: (guid: string) => (element: IElement) => boolean =
  (guid) => R.propEq('guid', guid);

  const nsAndTypeEq: (ns: string, type: string) => (element: IElement) => boolean =
  (ns, type) => R.allPass([R.propEq('ns', ns), R.propEq('type', type)]);

  const byGuid: (guid: uuid) => (elements: IElement[]) => IOptionalElement =
  (guid) => R.find(guidEq(guid));

  const filterByTypeEq: (search: ISearchDefinition, elements: IElement[]) => IElement[] =
  (s, elements) => R.filter(nsAndTypeEq(s.ns, s.type), elements);

  const getByGuid: (guid: uuid) => Bluebird<IOptionalElement> =
  (guid) => Bluebird.resolve(defaultToNull(byGuid(guid)(elementsByLocale())));

  const search: (search: ISearchDefinition) => Bluebird<IElement[]> =
  (s) => Bluebird.resolve(filterByTypeEq(s, elementsByLocale()));

  return {
    getByGuid,
    search,
  };
};

export default memoryRepository;
