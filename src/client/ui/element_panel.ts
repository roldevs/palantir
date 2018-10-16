import * as R from 'ramda';
import { h } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';
import { IElement, IElementDefinition, IRelatedElement, IRelatedElements } from '../../lib/typings';
import { dg } from '../../lib/utils';
import { IResultsState } from '../scaleapp/modules/results/controller';

const headerNode: (text: string) => VNode =
(text) => {
  return h('h4', {
    class: {
      ui: true,
      header: true,
    },
  }, text);
};

const panelTitleNode: (title: string, content: VNode[]) => VNode =
(title, content) => {
  return h('div', {
    class: {
      ui: true,
      segment: true,
    },
  }, R.concat([headerNode(title)], content));
};

const panelNode: (content: VNode[]) => VNode =
(content) => {
  return h('div', {
    class: {
      ui: true,
      segment: true,
    },
  }, content);
};

const elementText: (element: IElementDefinition | IElement | null) => string =
(element) => R.defaultTo('', element!.text);

const elementHeader: (element: IElementDefinition | IElement | null) => VNode =
(element) => headerNode(elementText(element));

const isExtendedElement: (element: IElementDefinition | IElement) => boolean =
(element) => !!element.related;

const elementPanel: (title: string, element: IElementDefinition | IElement | null) => VNode =
(title, element) => {
  const header: VNode = elementHeader(element);
  const content: VNode[] = relatedPanel(element);

  return panelTitleNode(title, content);
};

const reduceRelated: (
  related: IRelatedElements | null,
  parent: IElementDefinition | IElement | null,
) => (key: string) => VNode =
(related, _) => (key) => {
  const rel: IRelatedElement = related![key] as IRelatedElement;
  const content: VNode[] = R.map((element: IElementDefinition | IElement | null) => {
    const title: string = `${R.defaultTo(key, rel.text)}: ${elementText(element)}`;
    if (isExtendedElement(element!)) {
      return elementPanel(title, element);
    }
    return h('div', title);
  }, R.defaultTo([], rel.results));
  return h('div', {
    class: {
      ui: true,
      segments: true,
    },
   }, panelNode(content));
};

const relatedPanel: (element: IElementDefinition | IElement | null) => VNode[] =
(element) => {
  const related: any = element!.related!;
  return R.map(reduceRelated(related, element), R.keys(related));
};

const panel: (model: IResultsState) => VNode =
(model) => {
  dg('panel', model);

  const content: VNode[] = R.map((element: IElementDefinition | IElement) => {
    return elementPanel(elementText(element), element);
  }, model.elements);

  return h('div', R.concat([
      h('div', {
        class: {
          ui: true,
          top: true,
          attached: true,
          block: true,
          header: true,
        },
      }, model.options.type)],
      content,
    ),
  );
};

export default panel;
