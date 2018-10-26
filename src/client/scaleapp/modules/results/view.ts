import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import {
  IElement, IElementDefinition,
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

const generateRelated: (element: IElementDefinition, parent: IElementDefinition | null, depth: number) =>
  (keyRelated: any) => VNode =
(element, _, depth) => (keyRelated) => {
  const related: any = element.related![keyRelated];
  return h('div', {
    class: {
      item: true,
    },
  }, R.map(generateResults(related, depth + 1), related.results));
};

const generateResults: (parent: IElementDefinition | null, depth: number) => (element: IElementDefinition) => VNode =
(parent, depth) => (element) => {
  if (element.related) {
    const content: VNode[] = R.map(
      generateRelated(element, parent, depth),
      R.keys(element.related),
    );
    return titleNode(`${element.text}`, content);
  } else {
    if (parent) {
      return definitionNode(parent.text, element.text);
    } else {
      return titleNode(`${element.text}`, []);
    }
  }
};

const viewFn: (model: IResultsState, controller: IResultsController) => VNode =
(model) => {
  return h('div', R.map(generateResults(null, 0), model.elements));
};

export default viewFn;
