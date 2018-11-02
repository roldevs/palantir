#!/usr/bin/env ts-node
// tslint:disable:no-console
import cliCreator from './src/lib/cli';
import cliOutModule from './src/lib/cli/out';
import {
  IRelatedElement,
} from './src/lib/typings';
import { JSONprettify } from './src/lib/utils';

const cli = cliCreator(process.argv);

cli.get().then(cliOutModule(console.log).output);
