import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { IMetaCategoryResult } from '../../../../../lib/typings';
import { IResultsActions } from './model';

interface IResultsController {
  init: (category: string) => void;
  stream$: flyd.Stream<IMetaCategoryResult[]>;
}

interface IResultsControllerOptions {
  sb: any; // appScale Sandbox
  actions: IResultsActions;
}

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IMetaCategoryResult[]> = flyd.stream();
  const categoriesShow: (category: string) => Bluebird<IMetaCategoryResult[]> =
    (category) => config.sb.services.categories.show(category).then(R.prop('data'));

  const init: (category: string) => void = (category) => categoriesShow(category).then(stream$);

  return {
    init,
    stream$,
  };
};

export { controller, IResultsController };
