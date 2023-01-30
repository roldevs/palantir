
import { program } from 'commander';
import * as R from 'ramda';
interface IParserOptions {
  locale: string;
  count: number;
  debug: boolean;
  connector: number;
}

const argsParser: (args: string[]) => IParserOptions =
(args) => {
  program
    .version('0.0.1', '-v, --version')
    .option('-l, --locale [locale]', "Locale (defaults to 'es')")
    .option('-n, --namespace [namespace]', 'Namespace')
    .option('-t, --type [type]', 'Type')
    .option('-c, --count [count]', 'Number of generated elements (defaults to 1)', parseInt)
    .option('-d, --debug [debug]', 'Debug (defaults to false)')
    .option('-s, --connector [connector]', '0-Remote, 1-Local (defaults to 0)')
    .parse(args);
  const options = program.opts();

  return {
    locale: R.defaultTo('es', options.locale),
    count: R.defaultTo(1, options.count),
    debug: R.defaultTo(false, options.debug) === 'true',
    connector: R.defaultTo(0, options.connector),
  };
};

export {
  IParserOptions,
  argsParser,
};
