import * as R from 'ramda';
import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';

interface IDropdownItem {
  id: number;
  text: string;
  value: any;
}

interface IDropdownConfig {
    id: string;
    placeholder: string;
    value: string | null;
    name: string;
    disabled: boolean;
    options: IDropdownItem[];
}

type TDropdown = (config: IDropdownConfig) => {
  render: () => VNode,
};

// const _do_event: (
//   action: string,
//   config: any,
// ) => (
//   el: any,
// ) => void =
// function(action, config) {
//   return function(e) {
//     if (!config.disabled && config.event$) {
//       config.event$({
//         id: config.id,
//         action: action,
//         type: 'input',
//         event: e,
//       });
//     }
//   };
// };

const items: (
  config: {
    options: IDropdownItem[],
  },
) => VNode[] =
(config) => {
  return R.map(function(option: IDropdownItem) {
    return h('div', {
      class: {
        item: true,
      },
      attrs: {
        'data-value': option.id,
      },
    }, [
      option.text,
    ]);
  }, config.options);
};

const dropdown: TDropdown =
(config) => {
  const render: () => VNode =
  () => {
    return h('div', {
      class: {
        ui: true,
        fluid: true,
        search: true,
        selection: true,
        dropdown: true,
        disabled: config.disabled,
      },
      hook: {
        insert: (vnode: VNode) => {
          const $elm: any = $(vnode.elm!);
          $elm.dropdown({
            action: 'hide',
            onChange: () => {
              // onChange: (value: any, text: any, $selectedItem: any) => {
              // custom action
            },
          });
        },
        update: (vnode: VNode) => {
          const elm: any = vnode.elm;
        },
      },
    }, [
      h('input', {
        key: config.id,
        class: {
          search: true,
        },
        props: {
          id: config.id,
          type: 'input',
          name: config.name,
        },
        on: {
          // input: _do_event('input', config),
          // keydown: _do_event('keydown', config),
        },
      }),
      h('i', {
        class: {
          dropdown: true,
          icon: true,
        },
      }),
      h('div', {
        class: {
          default: true,
          text: true,
        },
      }, config.value || config.placeholder),
      h('div', {
        class: {
          menu: true,
        },
      }, items({
        options: config.options,
      })),
    ]);
  };
  return {
    render,
  };
};

export { IDropdownConfig, IDropdownItem, dropdown };
