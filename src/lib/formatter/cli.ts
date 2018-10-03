import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
  IFormattedResult,
  IFormattedResults,
  IFormatterModule,
  IRelatedElement,
  IRelatedElements,
} from '../typings';

const cliFormatterModule: IFormatterModule =
() => {
  const formatRelated: (related: IRelatedElement) => IFormattedResult =
  (related) => {
    let result: IFormattedResult = {};

    if (!R.isNil(related.text)) {
      result = R.set(
        R.lensProp('text'),
        related.text,
        result,
      );
    }

    if (!R.isEmpty(related.results)) {
      result = R.set(
        R.lensProp('results'),
        R.map(formatElement, related.results! as any),
        result,
      );
    }
    return result;
  };

  const reduceRelated: (related: IRelatedElements) => IFormattedResults =
  R.mapObjIndexed(formatRelated);

  const formatElement: (element: IElementDefinition) => IFormattedResult =
  (element) => {
    let result: IFormattedResult = {};

    if (!R.isNil(element.text)) {
      result = R.set(
        R.lensProp('text'),
        element.text,
        result,
      );
    }

    if (!R.isNil(element.related)) {
      result = R.set(
        R.lensProp('related'),
        reduceRelated(element.related!),
        result,
      );
    }
    return result;
  };

  const format: (elements: IElementDefinition[]) => Bluebird<IFormattedResult[]> =
  (elements) => Bluebird.resolve(R.map(formatElement, elements));

  return {
    format,
  };
};

export default cliFormatterModule;
