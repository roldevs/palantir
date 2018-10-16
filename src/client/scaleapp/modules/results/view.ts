import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import {
  IElementDefinition,
  IRelatedElement,
  IRelatedElements,
  IElement,
} from '../../../../lib/typings';
import { JSONprettify } from '../../../../lib/utils';
import elementPanel from '../../../ui/element_panel';
import { IResultsController, IResultsState } from './controller';
import { IResultsModel } from './model';

const parsedResult: (model: Array<IElementDefinition | null>) => string =
(model) => {
  if (!model) {
    return 'No se puede obtener un valor';
  }
  return JSONprettify(model);
};

const viewFn: (model: IResultsState, controller: IResultsController) => VNode =
(model) => {
  return h('div', [
    h('h1', 'Results'),
    elementPanel(model),
  ]);
};

export default viewFn;
