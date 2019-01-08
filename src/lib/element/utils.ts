import * as R from 'ramda';
import { IOptionalElementDefinition, IRelatedElement } from '../typings';

const hasOptions: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.options);

const hasRelated: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.related);

const hasDice: (element: IOptionalElementDefinition) => boolean =
  (element) => !!(element && element!.dice);

const relatedHasSearch: (related: IRelatedElement) => boolean =
  (related) => !!(related && related!.search);

const relatedHasDice: (related: IRelatedElement) => boolean =
  (related) => !!(related && related!.dice);

const relatedHasOptions: (related: IRelatedElement) => boolean =
  (related) => !!(related && related!.options);

export {
  hasOptions,
  hasRelated,
  hasDice,
  relatedHasSearch,
  relatedHasDice,
  relatedHasOptions,
};
