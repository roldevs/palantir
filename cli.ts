#!/usr/bin/env ts-node
// tslint:disable:no-console
import Bluebird from 'bluebird';
import * as R from 'ramda';
import cliCreator from './src/lib/cli';
import cliOutModule from './src/lib/cli/out';
import {
  IElementFormatted, IWorldElement,
} from './src/lib/typings';
import { JSONprettify } from './src/lib/utils';

const cli = cliCreator(process.argv);

const logElements: (elements: IWorldElement[]) => Bluebird<IElementFormatted[]> =
(elements) => {
  console.log(JSONprettify(elements));
  return Bluebird.resolve(R.map(R.prop('format'), elements));
};

cli.get().then(logElements).then(cliOutModule(console.log).output);
