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
import { defaultToNull, getUUID } from '../utils';

const memoryRepository: (options: IRepositoryOptions) => IRepositoryFactory =
(options) => {

  const elementsByLocale: () => IElement[] =
  () => R.defaultTo([], R.prop(options.locale, options.elements));

  const guidEq: (guid: string) => (element: IElement) => boolean =
  (guid) => R.propEq('guid', guid);

  const getByGuid: (guid: uuid) => (elements: IElement[]) => IOptionalElement =
  (guid) => R.find(guidEq(guid));

  const get: (guid: uuid) => Bluebird<IOptionalElement> =
  (guid) => Bluebird.resolve(defaultToNull(getByGuid(guid)(elementsByLocale())));

  const random: (search: ISearchDefinition[]) => Bluebird<IOptionalElement> =
  (_) => Bluebird.resolve({
    ns: 'ns',
    type: 'type',
    guid: getUUID(),
    text: 'Test',
  });

  return {
    get,
    random,
  };
};

export default memoryRepository;
