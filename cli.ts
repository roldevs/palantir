#!/usr/bin/env ts-node
// tslint:disable:no-console
import * as R from 'ramda';
import cliCreator from './src/lib/cli';
import {
  IRelatedElement,
} from './src/lib/typings';
import { JSONprettify } from './src/lib/utils';

const cli = cliCreator(process.argv);

cli.get().then(R.compose(console.log, JSONprettify));
