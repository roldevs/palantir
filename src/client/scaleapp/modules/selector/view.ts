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
      five: true,
      wide: true,
      field: true,
    },
  }, [
    h('label', config.label),
    config.content,
  ]);
};

interface IDropdownViewOptions {
  id: string;
  placeholder: string;
  value: string | null;
  options: IDropdownItem[];
  callback: (option: IDropdownItem) => void;
  disabled: boolean;
}

const dropdownView: (config: IDropdownViewOptions) => VNode =
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

interface IDropdownViewConfig {
  value: string | null;
  options: IDropdownItem[];
  controller: ISelectorController;
  disabled: boolean;
}

const getOptions: (
  config: IDropdownViewConfig,
  id: string,
  placeholder: string,
  callback: (option: IDropdownItem) => void,
) => IDropdownViewOptions =
(config, id, placeholder, callback) => {
  return {
    id,
    placeholder,
    value: config.value,
    options: config.options,
    callback,
    disabled: config.disabled,
  };
};

const dropdownLocale: (config: IDropdownViewConfig) => VNode =
(config) => dropdownView(
  getOptions(
    config,
    'dropdown_locale',
    'Idioma',
    (option: IDropdownItem) => config.controller.setLocale(option.value),
  ),
);

const dropdownNs: (config: IDropdownViewConfig) => VNode =
(config) => dropdownView(
  getOptions(
    config,
    'dropdown_ns',
    'Sistema',
    (option: IDropdownItem) => config.controller.setNs(option.value),
  ),
);

const dropdownType: (config: IDropdownViewConfig) => VNode =
(config) => dropdownView(
  getOptions(
    config,
    'dropdown_type',
    'Tabla',
    (option: IDropdownItem) => config.controller.setType(option.value),
  ),
);

const refreshButton: (model: ISelectorModel, controller: ISelectorController) => VNode =
(_, controller) => {
  return h('div', {
    class: {
      ui: true,
      primary: true,
      icon: true,
      button: true,
    },
    on: {
      click: controller.refresh,
    },
  }, [
    h('i', {
      class: {
        icon: true,
        refresh: true,
      },
    }),
  ]);
};

const typeDropdownAndRefreshButton: (model: ISelectorModel, controller: ISelectorController) => VNode[] =
(model, controller) => {
  return [
    h('div', {
      class: {
        thirteen: true,
        wide: true,
        field: true,
      },
    }, [
      dropdownType({
        value: model.type,
        options: mapTypeDropboxItems(model.typeList),
        controller,
        disabled: model.typeDisabled,
      }),
    ]),
    h('div', {
      class: {
        two: true,
        wide: true,
        field: true,
      },
    }, refreshButton(model, controller)),
  ];
};

const typeDropdownLabelAndRefreshButton: (model: ISelectorModel, controller: ISelectorController) => VNode =
(model, controller) => {
  return h('div', {
    class: {
      six: true,
      wide: true,
      field: true,
    },
  }, [
    h('label', 'Tabla'),
    h('div', {
      class: {
        two: true,
        fields: true,
      },
    }, typeDropdownAndRefreshButton(model, controller) ),
  ]);
};

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
    typeDropdownLabelAndRefreshButton(model, controller),
  ]);
};

export default viewFn;
