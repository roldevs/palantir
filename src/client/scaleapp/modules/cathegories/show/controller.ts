import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { IMetaCathegoryResult } from '../../../../../lib/typings';
import { IResultsActions, IResultsModel } from './model';

interface IResultsController {
  init: (cathegory: string) => void;
  stream$: flyd.Stream<IMetaCathegoryResult[]>;
}

interface IResultsControllerOptions {
  sb: any; // appScale Sandbox
  actions: IResultsActions;
}

const controller: (config: IResultsControllerOptions) => IResultsController =
(config) => {
  const stream$: flyd.Stream<IMetaCathegoryResult[]> = flyd.stream();
  const cathegoriesShow: (cathegory: string) => Bluebird<IMetaCathegoryResult[]> =
    (cathegory) => config.sb.services.cathegories.show(cathegory).then(R.prop('data'));

  const init: (cathegory: string) => void = (cathegory) => cathegoriesShow(cathegory).then(stream$);

  return {
    init,
    stream$,
  };
};

export { controller, IResultsController };
