import * as R from 'ramda';
import {
  IAliasDefinition,
  ISearchDefinition,
} from './typings';

const alias: (aliasDefinition: IAliasDefinition) => {
  toRelated: (relatedList: ISearchDefinition[]) => ISearchDefinition[],
} =
(aliasDefinition) => {
  const setType: (type: string) => (related: ISearchDefinition) => ISearchDefinition = (type) =>
  R.set(R.lensProp('type'), type);

  const expandRelated: (related: ISearchDefinition) => ISearchDefinition[] =
  (related) => {
    if (aliasDefinition[related.type]) {
      return R.map(function(t: string) {
        return setType(t)(related);
      }, aliasDefinition[related.type]);
    }
    return [related];
  };

  const toRelated: (relatedList: ISearchDefinition[]) => ISearchDefinition[] =
  (relatedList) => {
    return R.flatten<ISearchDefinition>(R.map(expandRelated, relatedList));
  };

  return {
    toRelated,
  };
};

export = alias;
