
import * as R from 'ramda';
import { 
  ERandomOption, 
  IElementDefinition, 
  IWorldDefinition, 
  IRelatedDefinition,
  IRelatedOptions,
  IElement,
} from './typings';
import { worldDefinition } from './definitions/world';

const _getDefinition: (world: IWorldDefinition) => (type: string) => IElementDefinition = 
function(world) {
  return function(type) {
    return R.find(R.propEq('type', type), world.definitions);
  }
}

const _getExisting: (world: IWorldDefinition) => (type: string) => Array<IElement> = 
function(world) {
  return function(type) {
    return R.find(R.propEq('type', type), world.existing);
  }
}

const _getDefinitions: (world: IWorldDefinition) => (type: string) => Array<IElementDefinition> = 
function(world) {
  return function(type) {  
    // Buscar primero en los alias
    if (world.alias[type]) {
      return R.map(
        _getDefinition(world),
        world.alias[type]
      );
    }
    return [_getDefinition(world)(type)];
  }
}

const _allOptions: (elements: Array<IElementDefinition>) => Array<IElementDefinition> = 
function(elements) {
  return R.flatten(R.map(R.prop('options'), elements)) as Array<IElementDefinition>;
}


const _getDefinitionOptions: (world: IWorldDefinition) => (type: string) => Array<IElementDefinition> = 
function(world) {
  return function(type) {  
    const defs: Array<IElementDefinition> = _getDefinitions(world)(type);
    return _allOptions(defs)
  }
}

const _randomElement: (world: IWorldDefinition) => (elements: Array<IElementDefinition>) => IElementDefinition = 
function(world) {
  // De las opciones del elemento, escoger una aleatoriamente
  return function(elements) {
    return elements[Math.floor(Math.random() * elements.length)]
  }
}

const _defaultRelatedOptions: (options: IRelatedOptions) => IRelatedOptions =
function(options) {
  const def: IRelatedOptions = {
    random: ERandomOption.random
  }
  return R.merge(def, options);
}

const _getRandomOption: (related: IRelatedDefinition) => ERandomOption = 
function(related) {
  return _defaultRelatedOptions(related.options).random;
}

const generateElement: (world: IWorldDefinition) => (related: IRelatedDefinition) => IElementDefinition = 
function(world) {
  // De las opciones del elemento, escoger una aleatoriamente
  return function(related) {
    let options: Array<IElementDefinition> = [];
    switch(_getRandomOption(related)) {
      case ERandomOption.all: {
        throw 'Pending';
        break;
      }
      case ERandomOption.exists: {
        throw 'Pending';
        break;
      }
      case ERandomOption.random: {
        options = _getDefinitionOptions(world)(related.type);
        break;
      }
    }
    return _randomElement(world)(options);
  }
}

const option: IElementDefinition = generateElement(worldDefinition)({
  type: 'items'
})

console.log(option)


// Elegir de elementos ya existentes
// Se puede seleccionar de un elemento padre (item = worn item, weapon item, etc)