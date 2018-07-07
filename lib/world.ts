
import * as R from 'ramda';
import requireDir from 'require-dir';
import relatedCreator from './related';
import {
  IElement,
  IElementDefinition,
  IRelatedElement,
  IWorldDefinition,
} from './typings';

interface IElementOptions {
  count?: number;
}

const world: (config: IWorldDefinition) => {
  get: (relatedElement: IRelatedElement) => IRelatedElement,
} = (config) => {
  const related = relatedCreator(config.alias, config.definitions, config.existing);

  const get: (relatedElement: IRelatedElement) => IRelatedElement =
  (relatedElement) => {
    return related.get(relatedElement);
  };

  return {
    get,
  };
};

export = world;
