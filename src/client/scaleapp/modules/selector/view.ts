import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { dropdown, IDropdownConfig, IDropdownItem } from './views/dropdown';

const formView: (fields: VNode[]) => VNode =
(fields) => {
  return h('form', {
    class: {
      ui: true,
      form: true,
    },
  }, [
    h('div', {
      class: {
        ui: true,
        dividing: true,
        header: true,
      },
    }, 'Selector de tabla'),
    h('div', {
      class: {
        three: true,
        fields: true,
      },
    }, fields),
  ]);
};

const fieldView: (config: {
  label: string,
  content: VNode,
}) => VNode =
(config) => {
  return h('div', {
    class: {
      field: true,
    },
  }, [
    h('label', config.label),
    config.content,
  ]);
};

const dropdownView: (config: {
  id: string,
  placeholder: string,
  value: string | null,
  options: IDropdownItem[],
}) => VNode =
(config) => {
  return dropdown({
    id: config.id,
    placeholder: config.placeholder,
    value: config.value,
    name: config.id,
    disabled: false,
    options: config.options,
  }).render();
};

const dropdownLocale: (config: {
  value: string | null,
  options: IDropdownItem[],
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_locale',
  placeholder: 'Idioma',
  value: config.value,
  options: config.options,
});

const dropdownNs: (config: {
  value: string | null,
  options: IDropdownItem[],
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_ns',
  placeholder: 'Sistema',
  value: config.value,
  options: config.options,
});

const dropdownType: (config: {
  value: string | null,
  options: IDropdownItem[],
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_type',
  placeholder: 'Tabla',
  value: config.value,
  options: config.options,
});

const viewFn: () => VNode =
() => formView([
  fieldView({
    label: 'Idioma',
    content: dropdownLocale({
      value: null,
      options: [],
    }),
  }),
  fieldView({
    label: 'Sistema',
    content: dropdownNs({
      value: null,
      options: [],
    }),
  }),
  fieldView({
    label: 'Tabla',
    content: dropdownType({
      value: null,
      options: [],
    }),
  }),
]);

export default viewFn;
