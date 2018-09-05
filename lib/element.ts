import Bluebird from 'bluebird';
import optionsModule from './options';
import relatedModule from './related';
import {
  IElementModule,
  IOptionalElementDefinition,
} from './typings';

const elementModule: IElementModule =
(world) => {
  const options = optionsModule(world);
  const related = relatedModule(world);

  const get: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition> =
  (element) => {
    if (related.hasRelated(element)) {
      return related.fetch(element);
    }
    return options.random(element);
  };

  return {
    get, // Returns a random element from the passed options
  };
};

export default elementModule;
