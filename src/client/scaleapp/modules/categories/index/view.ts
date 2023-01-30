import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom';
import { IResultsController } from './controller';
import { IResultsModel } from './model';

const categoryItem: (category: string | number) => VNode =
(category) => {
  return h('li', [
    h('a', { attrs: { href: `#/categories/${category}`} }, category),
  ]);
};

const viewFn: (model: IResultsModel, controller: IResultsController) => VNode =
  (model) => {
    return h('div', { attrs: { id: 'body' } }, [
      h('ul', R.map(categoryItem, model.categories)),
    ]);
  };

export default viewFn;
