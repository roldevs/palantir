import Bluebird from 'bluebird';
import optionsModule from './options';
import relatedModule from './related';
import {
  IElementModule,
  IOptionalElement,
  IOptionalElementDefinition,
} from './typings';

const elementModule: IElementModule =
(world) => {
  const options = optionsModule(world);
  const related = relatedModule(world);

  const get: (element: IOptionalElementDefinition | IOptionalElement) => Bluebird<IOptionalElementDefinition> =
  (element) => {
    // TODO: IOptionalElement
    if (related.hasRelated(element as IOptionalElementDefinition)) {
      return related.fetch(element as IOptionalElementDefinition);
    }
    return options.random(element as IOptionalElementDefinition);
  };

  return {
    get, // Returns a random element from the passed options
  };
};

export default elementModule;
