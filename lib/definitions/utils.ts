import * as R from 'ramda';
import { IElementDefinition, IRelatedElements } from '../typings';

interface IOptionsDefinition {
  index: number;
  related: IRelatedElements;
}

const generateOptions: (type: string, size: number) => IElementDefinition[] =
(type, size) => {
  return R.times((index: number) => {
    return {
      type,
      text: `${type}_${index + 1}`,
    };
  }, size);
};

const regularDefinition: (type: string, size: number) => IElementDefinition =
(type, size) => {
  return {
    type,
    text: type,
    options: generateOptions(type, size),
  };
};

const apOptionsDefinition: (definition: IElementDefinition) =>
  (newOptions: IOptionsDefinition[]) => IElementDefinition =
  (definition) => (newOptions) => {
    return R.reduce((acc: IElementDefinition, value: any) => {
      const oldOptions: IElementDefinition[] = R.set(
        R.lensPath([value.index - 1, 'related']),
        value.related,
        R.prop('options', acc),
      )!;
      return R.set(R.lensProp('options'), oldOptions, acc);
    }, definition, newOptions);
  };

const apRegularDefinition: (type: string, size: number) =>
  (options: any) => IElementDefinition =
  (type, size) => apOptionsDefinition(regularDefinition(type, size));

export { generateOptions, regularDefinition, apRegularDefinition };
