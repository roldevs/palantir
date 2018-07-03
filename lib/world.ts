
import requireDir from 'require-dir';
import localizeCreator from './localize';
import relatedCreator from './related';
import {
  IElement,
  IElementDefinition,
  IWorldDefinition,
} from './typings';

const world: (config: IWorldDefinition) => {
  getElement: (type: string) => IElement | IElementDefinition | undefined;
} =
(config) => {
  const translations = requireDir('./translations', {recurse: true});
  const localize = localizeCreator({locale: 'es', debug: false, translations});
  const related = relatedCreator(config.alias, config.definitions, config.existing);

  const getElement: (type: string) => IElement | IElementDefinition | undefined =
  (type) => {
    return localize.tElement(related.get([{ type }]));
  };

  return {
    getElement,
  };
};

export = world;
