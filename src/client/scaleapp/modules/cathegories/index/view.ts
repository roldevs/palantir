import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { JSONprettify } from '../../../../../lib/utils';
import { IResultsController } from './controller';
import { IResultsModel } from './model';

const cathegoryItem: (cathegory: string | number) => VNode =
(cathegory) => {
  return h('li', [
    h('a', { attrs: { href: `#/cathegories/${cathegory}`} }, cathegory),
  ]);
};

const viewFn: (model: IResultsModel, controller: IResultsController) => VNode =
  (model) => {
    return h('div', { attrs: { id: 'body' } }, [
      h('ul', R.map(cathegoryItem, model.cathegories)),
    ]);
  };

export default viewFn;
