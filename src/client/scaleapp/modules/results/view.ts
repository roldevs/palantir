import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { IFormattedResult } from '../../../../lib/typings';
import { JSONprettify } from '../../../../lib/utils';
import { IResultsController } from './controller';
import { IResultsModel } from './model';

const parsedResult: (model: IFormattedResult | null) => string =
(model) => {
  if (!model) {
    return 'No se puede obtener un valor';
  }
  return JSONprettify(model);
};

const viewFn: (model: IFormattedResult | null, controller: IResultsController) => VNode =
(model) => {
  return h('div', [
    h('h1', 'Results'),
    h('pre', parsedResult(model)),
  ]);
};

export default viewFn;
