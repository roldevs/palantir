import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  ICliOutModule,
  IElementDefinition,
  IElementFormatted,
} from '../typings';
import { spaces } from '../utils';

const cliOutModule: ICliOutModule =
(logger: any) => {
  const generateResults: (parent: IElementFormatted | null, depth: number) =>
    (element: IElementFormatted) => void =
  (parent, depth) => (element) => {
    if (element.children) {
      logger(`${spaces(depth)} ${element.title}`);
      R.map(generateResults(element, depth + 1), element.children);
    }

    if (parent) {
      logger(`${spaces(depth)} ${parent!.title!}: ${element.text!}`);
    }
  };

  const output: (elements: IElementFormatted[]) => void =
  // tslint:disable-next-line:no-console
  (elements) => R.map(generateResults(null, 0), elements);

  return {
    output,
  };
};

export default cliOutModule;
