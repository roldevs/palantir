import * as R from 'ramda';
import {
  ERandomOption,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
} from './typings';

const options: (definitions: IElementDefinition[], existing: IElement[]) => {
  fromDefinition: (type: string) => IElementDefinition[],
  fromExisting: (type: string) => IElement[],
  fromAll: (type: string) => Array<IElement | IElementDefinition>,
  fromRelatedList: (relatedList: IRelatedDefinition[]) => Array<IElement | IElementDefinition>,
} =
(definitions, existing) => {
  const fromDefinition: (type: string) => IElementDefinition[] =
  (type) => {
    // Search the type from definitions
    const definition = R.find(R.propEq('type', type), definitions);
    if (!definition) {
      // TODO: Left/Rigth ?
      // throw new TypeError(`Type: ${type} definition not found`);
      return [];
    }

    // At least return an empty array
    return R.compose(
      R.defaultTo<IElementDefinition[]>([]),
      R.view(R.lensProp('options')),
    )(definition) as IElementDefinition[];
  };

  const fromExisting: (type: string) => IElement[] =
  (type) => {
    return R.filter(R.propEq('type', type), existing);
  };

  const fromAll: (type: string) => Array<IElement | IElementDefinition> =
  (type) => {
    return R.concat<IElement | IElementDefinition>(
      fromDefinition(type),
      fromExisting(type),
    );
  };

  const mapFn: any = {};
  mapFn[ERandomOption.all] = fromAll;
  mapFn[ERandomOption.exists] = fromExisting;
  mapFn[ERandomOption.random] = fromDefinition;

  const defaultRandom: (random: ERandomOption | undefined ) => ERandomOption =
  R.defaultTo(ERandomOption.random);

  const optionsByRelated: (related: IRelatedDefinition) => Array<IElement | IElementDefinition> =
  (related) => mapFn[defaultRandom(related.random)](related.type);

  const fromRelatedList: (relatedList: IRelatedDefinition[]) => Array<IElement | IElementDefinition> =
  (relatedList) => {
    return R.flatten<IElement | IElementDefinition>(R.map(optionsByRelated, relatedList));
  };

  return {
    fromDefinition,
    fromExisting,
    fromAll,
    fromRelatedList,
  };
};

export = options;
