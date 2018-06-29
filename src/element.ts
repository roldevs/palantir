import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
} from './typings';

const element: (definitions: IElementDefinition[], existing: IElement[]) => {
  fromDefinitions: (type: string) => IElementDefinition | undefined,
  fromExisting: (guid: string) => IElement | undefined,
  find: (typeOrGuid: string) =>  IElementDefinition | IElement | undefined,
} =
(definitions, existing) => {
  const fromDefinitions: (type: string) => IElementDefinition | undefined =
  (type) => {
    return R.find(R.propEq('type', type), definitions);
  };

  const fromExisting: (guid: string) => IElement | undefined =
  (guid) => {
    return R.find(R.propEq('guid', guid), existing);
  };

  const find: (typeOrGuid: string) =>  IElementDefinition | IElement | undefined =
  (typeOrGuid) => {
    return fromDefinitions(typeOrGuid) || fromExisting(typeOrGuid);
  };

  return {
    fromDefinitions,
    fromExisting,
    find,
  };
};

export = element;
