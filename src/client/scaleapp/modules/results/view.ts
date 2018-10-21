import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import {
  IElementDefinition,
} from '../../../../lib/typings';
import { JSONprettify } from '../../../../lib/utils';
import elementPanel from '../../../ui/element_panel';
import { IResultsController, IResultsState } from './controller';

const viewFn: (model: IResultsState, controller: IResultsController) => VNode =
(model) => {
  return h('div', [
    elementPanel(model),
  ]);
};

export default viewFn;
