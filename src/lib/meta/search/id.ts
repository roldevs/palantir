import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IMetaIdModule,
  ISearchDefinition,
} from '../../typings';
import { compactArray } from '../../utils';

const metaIdModule: IMetaIdModule =
(metaDefinition) => {
  const search: (id: string) => ISearchDefinition[] =
  (id) => compactArray([R.view(R.lensPath(['ids', id]), metaDefinition)]);

  return {
    search,
  };
};

export default metaIdModule;
