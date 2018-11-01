import { IOptionalElementDefinition } from '../typings';

const hasOptions: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.options);

const hasRelated: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.related);

const hasDice: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.dice);

export {
  hasOptions,
  hasRelated,
  hasDice,
};
