import * as R from 'ramda';
import {
  IMetaTermModule, ISearchDefinition,
} from '../../typings';
import { compactArray } from '../../utils';

const metaTermModule: IMetaTermModule =
(metaDefinition) => {

  const definitionValue: (field: string) => (definition: ISearchDefinition) => string
    = (field) => (definition) => R.view(R.lensProp(field), definition);

  const hasValue: (field: string, value: string) => (definition: ISearchDefinition) => boolean =
    (field, value) => R.compose(R.includes(value), definitionValue(field));

  const searchByField: (field: string, value: string) => (definitions: ISearchDefinition[])
    => ISearchDefinition[] = (field, value) => R.filter(hasValue(field, value));

  const search: (term: string) => ISearchDefinition[] =
    (term) => compactArray(
      R.concat(
        searchByField('ns', term)(metaDefinition.directory),
        searchByField('type', term)(metaDefinition.directory),
      )
    );

  return {
    search,
  };
};

export default metaTermModule;
