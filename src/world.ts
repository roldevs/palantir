
import * as R from 'ramda';
import relatedCreator from './related';
import {
  ERandomOption,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from './typings';

const world: (config: IWorldDefinition) => {
  getElement: (type: string) => IElement | IElementDefinition | undefined;
} =
(config) => {
  const related = relatedCreator(config.alias, config.definitions, config.existing);

  const getElement: (type: string) => IElement | IElementDefinition | undefined =
  (type) => {
    return related.get([{ type }]);
  };

  return {
    getElement,
  };
};

export = world;
