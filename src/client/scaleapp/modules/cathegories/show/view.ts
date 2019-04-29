import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { IMetaCathegoryResult, ISearchDefinition } from '../../../../../lib/typings';
import { IResultsController } from './controller';

const cathegoryLocatorItem: (locator: ISearchDefinition) => VNode =
(locator) => {
  return h('li', [
    h('a', { attrs: { href: `#/random/${locator.locale}/${locator.ns}/${locator.type}`} }, locator.type),
  ]);
};

const cathegoryLocators: (locators: ISearchDefinition[]) => VNode =
(locators) => {
  return h('ul', R.map(cathegoryLocatorItem, locators));
};

const cathegoryBlock: (cathegoryResult: IMetaCathegoryResult) => VNode =
(cathegoryResult) => {
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
      }, cathegoryResult.ns ),
      h('div', {
        class: {
          ui: true,
          content: true,
        },
      }, cathegoryLocators(cathegoryResult.locators)),
    ]),
  ]);
};

const viewFn: (model: IMetaCathegoryResult[], controller: IResultsController) => VNode =
  (model) => h('div', {
    attrs: { id: 'body' },
    class: { ui: true, two: true, column: true, grid: true, basic: true, segment: true },
  }, R.map(cathegoryBlock, model));

export default viewFn;
