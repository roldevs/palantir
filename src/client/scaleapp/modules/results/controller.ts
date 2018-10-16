import flyd from 'flyd';
import * as R from 'ramda';
import { IElementDefinition } from '../../../../lib/typings';
import { ISelectorOptions } from '../selector/controller';
import { IResultsActions } from './model';

interface IResultsState {
  elements: IElementDefinition[];
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

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IResultsState> = flyd.stream();
  let oldOptions: ISelectorOptions;

  const sameOptions: (options: ISelectorOptions) => boolean =
  (options) => {
    if (!oldOptions) {
      return false;
    }
    return options.locale === oldOptions.locale &&
      options.ns === oldOptions.ns &&
      options.type === oldOptions.type;
  };

  const setOptions: (options: ISelectorOptions) => void =
  (options)  => {
    if (sameOptions(options)) {
      return;
    }
    oldOptions = options;
    if (options.type && options.ns && options.locale) {
      config.sb.services.random.index(options).then(R.prop('data')).then(
        (elements: IElementDefinition[]) => {
          return { elements, options };
        },
      ).then(stream$);
      return;
    }
    stream$({elements: [], options});
  };

  const init: (options: ISelectorOptions) => void = setOptions;

  return {
    init,
    setOptions,
    stream$,
  };
};

export { controller, IResultsController, IResultsState };
