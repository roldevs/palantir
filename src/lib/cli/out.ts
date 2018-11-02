import * as R from 'ramda';
import {
  ICliOutModule,
  IElementDefinition,
  IElementFormatted,
} from '../typings';
import { spaces } from '../utils';

const cliOutModule: ICliOutModule =
(logger: any) => {
  const generateResults: (depth: number) => (element: IElementFormatted) => void =
  (depth) => (element) => {
    if (element.children) {
      logger(`${spaces(depth)} ${element.title}`);
      R.map(generateResults(depth + 1), element.children);
      return;
    }

    logger(`${spaces(depth)} ${element.title!}: ${element.text!}`);
  };

  return {
    output: R.map(generateResults(0)),
  };
};

export default cliOutModule;
