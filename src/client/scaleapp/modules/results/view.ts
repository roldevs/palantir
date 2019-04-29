import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import {
  IElementFormatted,
} from '../../../../lib/typings';
import { IResultsController, IResultsState } from './controller';

const titleNode: (title: string, content: VNode[]) => VNode =
(title, content) => {
  const node: VNode = h('h4', {
    class: {
      item: true,
    },
  }, title);

  return h('div', {
    class: {
      ui: true,
      segment: true,
    },
  }, R.concat([node], content));
};

const definitionNode: (key: string, text: string) => VNode =
(key, text) => {
  return h('div', {
    class: {
      item: true,
    },
  }, [
    h('b', `${key}: `),
    h('span', text),
  ]);
};

const generateResults: (parent: IElementFormatted | null, depth: number) => (element: IElementFormatted) => VNode =
(_, depth) => (element) => {
  if (element.children) {
    return titleNode(`${element.title}`, R.map(generateResults(element, depth + 1), element.children));
  }

  return definitionNode(element.title!, element.text!);
};

const viewFn: (model: IResultsState, controller: IResultsController) => VNode =
(model) => h('div', {
    props: {
      id: 'body',
    },
  }, R.map(generateResults(null, 0), model.elements));

export default viewFn;
