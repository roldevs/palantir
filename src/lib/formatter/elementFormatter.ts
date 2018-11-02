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

const traverse: (
  element: IElementDefinition  | IElement,
  parent: IElementDefinition | IElement | null | undefined,
  depth: number,
) => IElementFormatted | null =
(element, parent, depth) => {
  if (element.related) {
    const children: IElementFormatted[] = [];
    R.forEach(processRelated(element, depth, children), R.keys(element.related));
    return { title: parent!.text, children };
  }
  return { title: parent!.text! || element!.parent!.text || element!.text, text: element.text };
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
