import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
  IElementFormatted,
  IOptionalElement,
  IOptionalElementDefinition,
} from '../typings';

interface IOutInfo {
  depth: number;
  text: string;
}

type IRandomJsonFormatter =  () => {
  format: (element: IElementDefinition | IElement, parent: IOptionalElement | IOptionalElementDefinition) =>
    IElementFormatted | null;
};

const processRelated: (element: IElement | IElementDefinition, depth: number, children: IElementFormatted[]) =>
  (keyRelated: any) => void =
(element, depth, children) => (keyRelated) => {
  const related: any = element.related![keyRelated];
  R.forEach(
    (result: any) => {
      children.push(traverse(result, related, depth + 1)!);
    },
    related.results,
  );
};

const title: (element: IElementDefinition | IElement, parent: IOptionalElementDefinition | IOptionalElement)
  => string =
(element, parent) => {
  if (parent && parent.text) {
    return parent.text;
  }

  if (element.parent && element.parent.text) {
    return element.parent.text;
  }
  return element.text;
};

const toFormatted: (
  element: IElementDefinition | IElement,
  parent: IElementDefinition | IElement | null | undefined,
  children: IElementFormatted[],
) => IElementFormatted =
(element, parent, children) => {
  if (!element.related) {
    return { title: title(element, parent), text: element.text };
  }

  if (element.text && element.parent) {
    return { title: title(element, parent), children: [{ title: element.text, children }] };
  }
  return { title: title(element, parent), children };
};

const traverse: (
  element: IElementDefinition | IElement,
  parent: IElementDefinition | IElement | null | undefined,
  depth: number,
) => IElementFormatted =
(element, parent, depth) => {
  const children: IElementFormatted[] = [];
  if (element.related) {
    R.forEach(processRelated(element, depth, children), R.keys(element.related));
  }
  return toFormatted(element, parent, children);
};

const elementFormatter: IRandomJsonFormatter =
() => {
  const format: (element: IElementDefinition | IElement, parent: IOptionalElement | IOptionalElementDefinition) =>
    IElementFormatted | null =
  (element, parent) => traverse(element, parent, 0);

  return {
    format,
  };
};

export {
  IElementFormatted,
  elementFormatter,
};
