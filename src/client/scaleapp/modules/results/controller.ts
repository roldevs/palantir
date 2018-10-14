import flyd from 'flyd';
import { IFormattedResult } from '../../../../lib/typings';
import { ISelectorOptions } from '../selector/controller';
import { IResultsActions, IResultsModel } from './model';

interface IResultsController {
  init: (options: ISelectorOptions) => void;
  setOptions: (options: ISelectorOptions) => void;
  stream$: flyd.Stream<IFormattedResult | null>;
}

interface IResultsControllerOptions {
  sb: any; // appScale Sandbox
  actions: IResultsActions;
}

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IFormattedResult | null> = flyd.stream();

  const setOptions: (options: ISelectorOptions) => void =
  (options)  => {
    if (options.type && options.ns && options.locale) {
      config.sb.services.random.index(options).then(stream$);
      return;
    }
    stream$(null);
  };

  const init: (options: ISelectorOptions) => void = setOptions;

  return {
    init,
    setOptions,
    stream$,
  };
};

export { controller, IResultsController };
