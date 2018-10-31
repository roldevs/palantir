import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
  IElementFormatted,
  IOptionalElement,
  IOptionalElementDefinition,
} from '../typings';
import { compactArray } from '../utils';

interface IOutInfo {
  depth: number;
  text: string;
}

type IRandomJsonFormatter =  () => {
  format: (element: IElementDefinition | IElement, parent: IOptionalElement | IOptionalElementDefinition) =>
    IElementFormatted | null;
};

const elementFormatter: IRandomJsonFormatter =
() => {
  const traverse: (
    element: IElementDefinition  | IElement,
    parent: IElementDefinition | IElement | null | undefined,
    depth: number,
  ) => IElementFormatted | null =
  (element, parent, depth) => {
    if (element.related) {
      const children: IElementFormatted[] = [];
      R.forEach(
        (keyRelated: any) => {
          const related: any = element.related![keyRelated];
          R.forEach(
            (result: any) => {
              children.push(traverse(result, related, depth + 1)!);
            },
            related.results,
          );
        },
        R.keys(element.related),
      );
      return {
        title: element!.text,
        text: element.text,
        children,
      };
    }
    return {
      title: parent!.text! || element!.text,
      text: element.text,
    };
  };

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
