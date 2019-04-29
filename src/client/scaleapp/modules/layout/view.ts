import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import optionsModule from '../../../../lib/element/options';

interface IMenuOption {
  label: string;
  link: string;
}

const dropdownHook: () => (vnode: VNode) => any =
() => (vnode) => {
  const $elm: any = $(vnode.elm!);
  $elm.dropdown({
    action: 'hide',
  });
};

const menuItem: (option: IMenuOption) => VNode =
  (option) => h('div', {
    class: { item: true },
  }, [
    h('div', {
      class: { content: true },
    }, [
      h('a', { attrs: { href: option.link } }, option.label ),
    ]),
  ]);

const menu: (label: string, options: IMenuOption[]) => VNode =
(label, options) => h('div', {
    class: {
      ui: true,
      dropdown: true,
      item: true,
    },
    hook: {
      insert: dropdownHook(),
      update: dropdownHook(),
    },
  }, [
    h('div', label),
    h('i', {
      class: {
        dropdown: true,
        icon: true,
      },
    }),
    h('div', {
      class: {
        menu: true,
      },
    }, R.map(menuItem, options)),
  ]);

const menuDropdown: () => VNode =
  () => menu('Quick menu', [{
    link: '#/random',
    label: 'Table Selector',
  }, {
    link: '#/categories',
    label: 'Categories',
  }]);

const localeDropdown: () => VNode =
  () => menu('UI Language', [{
    link: '',
    label: 'Español',
  }, {
    link: '',
    label: 'English',
  }]);

const topNav: () => VNode =
() => {
  return h('div', {
    class: {
      ui: true,
      fixed: true,
      inverted: true,
      menu: true,
    },
  }, [
    h('div', {
      class: {
        ui: true,
        container: true,
      },
    }, [
      h('a', {
        class: {
          header: true,
          item: true,
        },
      }, 'Hall 9000' ),
    ]),
    menuDropdown(),
    // localeDropdown(),
  ]);
};

const viewFn: () => VNode =
() => {
  return h('div', {
    props: {
      id: 'application',
    },
  }, [
    topNav(),
    h('div', {
      class: {
        ui: true,
        main: true,
        text: true,
        container: true,
      },
    }, [
      h('div', { props: { id: 'header' } } ),
      h('div', { props: { id: 'body' } } ),
    ]),
  ]);
};

export default viewFn;
