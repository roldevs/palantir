import Bluebird from 'bluebird';
import optionsModule from './element/options';
import relatedModule from './element/related';
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
    if (options.hasOptions(element as IOptionalElementDefinition)) {
      return options.random(element as IOptionalElementDefinition);
    }
    return Bluebird.resolve(element as IOptionalElementDefinition);
  };

  return {
    get,
  };
};

export default elementModule;
