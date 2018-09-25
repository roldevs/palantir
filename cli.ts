#!/usr/bin/env ts-node
import * as R from 'ramda';
import cliCreator from './lib/cli';
import {
  IRelatedElement,
} from './lib/typings';
import { JSONprettify } from './lib/utils';

const cli = cliCreator(process.argv);

cli.get().then(R.compose(console.log, JSONprettify));
