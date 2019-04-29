import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { IMetaCategoryResult, ISearchDefinition } from '../../../../../lib/typings';
import { IResultsController } from './controller';

const categoryLocatorItem: (locator: ISearchDefinition) => VNode =
(locator) => {
  return h('li', [
    h('a', { attrs: { href: `#/random/${locator.locale}/${locator.ns}/${locator.type}`} }, locator.type),
  ]);
};

const categoryLocators: (locators: ISearchDefinition[]) => VNode =
(locators) => {
  return h('ul', R.map(categoryLocatorItem, locators));
};

const categoryBlock: (categoryResult: IMetaCategoryResult) => VNode =
(categoryResult) => {
  return h('div', {
    class: {
      ui: true,
      column: true,
    },
  }, [
    h('div', {
      class: {
        ui: true,
        segment: true,
      },
    }, [
      h('h3', {
        class: {
          ui: true,
          dividing: true,
          header: true,
        },
      }, categoryResult.ns ),
      h('div', {
        class: {
          ui: true,
          content: true,
        },
      }, categoryLocators(categoryResult.locators)),
    ]),
  ]);
};

const viewFn: (model: IMetaCategoryResult[], controller: IResultsController) => VNode =
  (model) => h('div', {
    attrs: { id: 'body' },
    class: { ui: true, two: true, column: true, grid: true, basic: true, segment: true },
  }, R.map(categoryBlock, model));

export default viewFn;
