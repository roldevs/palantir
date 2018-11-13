import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { IElementDefinition, IElementFormatted } from '../../../../lib/typings';
import { ISelectorOptions } from '../selector/controller';
import { IResultsActions } from './model';

interface IResultsState {
  elements: IElementFormatted[];
  options: ISelectorOptions;
}

interface IResultsController {
  init: (options: ISelectorOptions) => void;
  setOptions: (options: ISelectorOptions) => void;
  stream$: flyd.Stream<IResultsState>;
}

interface IResultsControllerOptions {
  sb: any; // appScale Sandbox
  actions: IResultsActions;
}

const sameOptions: (options: ISelectorOptions, oldOptions: ISelectorOptions) => boolean =
(options, oldOptions) => {
  if (!oldOptions) {
    return false;
  }
  return options.locale === oldOptions.locale &&
    options.ns === oldOptions.ns &&
    options.type === oldOptions.type;
};

const streamOptions: (
  config: IResultsControllerOptions,
  options: ISelectorOptions,
) => Bluebird<IResultsState> =
(config, options) => {
  if (options.type && options.ns && options.locale) {
    return config.sb.services.random.index(options).then(
      R.prop('data'),
    // ).then(
    //   R.map(R.prop('format')),
    ).then(
      (elements: IElementDefinition[]) => {
        return { elements, options };
      },
    );
  }
  return Bluebird.resolve({elements: [], options});
};

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IResultsState> = flyd.stream();
  let oldOptions: ISelectorOptions;

  const setOptions: (options: ISelectorOptions) => void =
  (options)  => {
    if (!options.reload && sameOptions(options, oldOptions)) {
      return;
    }
    oldOptions = options;
    streamOptions(config, options).then(stream$);
  };

  const init: (options: ISelectorOptions) => void = setOptions;

  return {
    init,
    setOptions,
    stream$,
  };
};

export { controller, IResultsController, IResultsState };
