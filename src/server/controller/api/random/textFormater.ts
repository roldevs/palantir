import * as R from 'ramda';
import {
  IElementDefinition,
} from '../../../../lib/typings';

interface IOutInfo {
  depth: number;
  text: string;
}

type IRandomTextFormatter =  (elements: IElementDefinition[]) => {
  format: () => string;
};

const textFormatter: IRandomTextFormatter =
(elements) => {
  const spaces: (n: number) => string = (n) => ' '.repeat(n);

  const traverse: (
    element: IElementDefinition,
    parent: IElementDefinition | null,
    depth: number,
    acc: IOutInfo[],
  ) => void =
  (element, parent, depth, acc) => {
    if (element.related) {
      acc.push({depth, text: `${element.text}`});
      R.forEach(
        (keyRelated: any) => {
          const related: any = element.related![keyRelated];
          R.forEach(
            (result: any) => {
              traverse(result, related, depth + 1, acc);
            },
            related.results,
          );
        },
        R.keys(element.related),
      );
    } else {
      if (parent) {
        acc.push({depth, text: `**${parent.text}**: ${element.text}`});
      }
    }
  };

  const accumulate: () => IOutInfo[] =
  () => {
    const accumulator: IOutInfo[] = [];
    R.forEach(
      (element: IElementDefinition) => {
        traverse(element, null, 0, accumulator);
      }, elements,
    );
    return accumulator;
  };

  const format: () => string =
  () => {
    return R.compose(
      R.join('\n'),
      R.map(
        (info: IOutInfo) => `${spaces(info.depth)} ${info.text}`,
      ),
    )(accumulate());
  };

  return {
    format,
  };
};

export {
  textFormatter,
};
