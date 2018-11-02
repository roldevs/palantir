import * as R from 'ramda';
import { IOptionalElementDefinition, IRelatedElement } from '../typings';

const hasOptions: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.options);

const hasRelated: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.related);

const hasDice: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.dice);

const optionCount: (relatedElement: IRelatedElement) => any =
  R.compose(R.defaultTo(1), R.view(R.lensProp('count')));

export {
  hasOptions,
  hasRelated,
  hasDice,
  optionCount,
};
