import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';
import { dropdown, IDropdownItem } from '../../../ui/dropdown';
import { ISelectorController } from './controller';
import { ISelectorModel } from './model';
import { mapDropboxItems, mapTypeDropboxItems } from './util';

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
  callback: (option: IDropdownItem) => void,
  disabled: boolean,
}) => VNode =
(config) => {
  return dropdown({
    id: config.id,
    placeholder: config.placeholder,
    value: config.value,
    name: config.id,
    disabled: config.disabled,
    options: config.options,
    callback: config.callback,
  }).render();
};

const dropdownLocale: (config: {
  value: string | null,
  options: IDropdownItem[],
  controller: ISelectorController,
  disabled: boolean,
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_locale',
  placeholder: 'Idioma',
  value: config.value,
  options: config.options,
  callback: (option: IDropdownItem) => {
    config.controller.setLocale(option.value);
  },
  disabled: config.disabled,
});

const dropdownNs: (config: {
  value: string | null,
  options: IDropdownItem[],
  controller: ISelectorController,
  disabled: boolean,
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_ns',
  placeholder: 'Sistema',
  value: config.value,
  options: config.options,
  callback: (option: IDropdownItem) => {
    config.controller.setNs(option.value);
  },
  disabled: config.disabled,
});

const dropdownType: (config: {
  value: string | null,
  options: IDropdownItem[],
  controller: ISelectorController,
  disabled: boolean,
}) => VNode =
(config) => dropdownView({
  id: 'dropdown_type',
  placeholder: 'Tabla',
  value: config.value,
  options: config.options,
  callback: (option: IDropdownItem) => {
    config.controller.setType(option.value);
  },
  disabled: config.disabled,
});

const viewFn: (model: ISelectorModel, controller: ISelectorController) => VNode =
(model, controller) => {
  return formView([
    fieldView({
      label: 'Idioma',
      content: dropdownLocale({
        value: model.locale,
        options: mapDropboxItems(model.localeList),
        controller,
        disabled: model.localeDisabled,
      }),
    }),
    fieldView({
      label: 'Sistema',
      content: dropdownNs({
        value: model.ns,
        options: mapDropboxItems(model.nsList),
        controller,
        disabled: model.nsDisabled,
      }),
    }),
    fieldView({
      label: 'Tabla',
      content: dropdownType({
        value: model.type,
        options: mapTypeDropboxItems(model.typeList),
        controller,
        disabled: model.typeDisabled,
      }),
    }),
  ]);
};

export default viewFn;
