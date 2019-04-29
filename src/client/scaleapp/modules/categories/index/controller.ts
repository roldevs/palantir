import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { IResultsActions, IResultsModel } from './model';

interface IResultsController {
  init: () => void;
  stream$: flyd.Stream<IResultsModel>;
}

interface IResultsControllerOptions {
  sb: any; // appScale Sandbox
  actions: IResultsActions;
}

const loadList: (options: IResultsControllerOptions) => Bluebird<string[]> =
(options) => options.sb.services.categories.index().then(R.prop('data'));

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IResultsModel> = flyd.stream();

  const init: () => void = () => loadList(config).then((categories) => {
    stream$({categories});
  });

  return {
    init,
    stream$,
  };
};

export { controller, IResultsController };
