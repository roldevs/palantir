import * as R from 'ramda';
import {
  IAliasDefinition,
  IRelatedDefinition,
} from './typings';

const alias: (aliasDefinition: IAliasDefinition) => {
  toRelated: (relatedList: IRelatedDefinition[]) => IRelatedDefinition[],
} =
(aliasDefinition) => {
  const setType: (type: string) => (related: IRelatedDefinition) => IRelatedDefinition = (type) =>
  R.set(R.lensProp('type'), type);

  const expandRelated: (related: IRelatedDefinition) => IRelatedDefinition[] =
  (related) => {
    if (aliasDefinition[related.type]) {
      return R.map(function(t: string) {
        return setType(t)(related);
      }, aliasDefinition[related.type]);
    }
    return [related];
  };

  const toRelated: (relatedList: IRelatedDefinition[]) => IRelatedDefinition[] =
  (relatedList) => {
    return R.flatten<IRelatedDefinition>(R.map(expandRelated, relatedList));
  };

  return {
    toRelated,
  };
};

export = alias;
