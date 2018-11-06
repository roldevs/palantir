import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IMetaIdModule,
  ITableLocator,
} from '../typings';

const metaIdModule: IMetaIdModule =
(metaDefinition) => {
  const get: (id: string) => ITableLocator =
  (id) => R.view(R.lensPath(['ids', id]), metaDefinition);

  return {
    get,
  };
};

export default metaIdModule;
