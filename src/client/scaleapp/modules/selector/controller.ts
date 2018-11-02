import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { ISelectorActions, ISelectorModel } from './model';

interface ISelectorOptions {
  locale?: string;
  ns?: string;
  type?: string;
  reload?: boolean;
}

interface ISelectorController {
  init: (config: ISelectorOptions) => void;
  setLocale: (locale: string) => void;
  setNs: (ns: string) => void;
  setType: (type: string) => void;
  refresh: () => void;
  stream$: flyd.Stream<ISelectorModel>;
}

interface ISelectorControllerOptions {
  sb: any; // appScale Sandbox
  actions: ISelectorActions;
}

const loadList: (options: ISelectorControllerOptions, config: ISelectorOptions) => Bluebird<string[]> =
(options, config) => options.sb.services.folders.index(config).then(R.prop('data'));

const promiseSetLocale: (options: ISelectorControllerOptions, locale: string | null | undefined) =>
  Bluebird<ISelectorModel> =
(options, locale) => {
  if (locale)  {
    // Cargar lista de ns
    return loadList(options, {locale}).then((nss: string[]) => {
      options.actions.setLocale(locale);
      options.actions.setNs(null);
      options.actions.setNsList([]);
      options.actions.setType(null);
      options.actions.setTypeList([]);
      return options.actions.setNsList(nss);
    });
  } else {
    return new Bluebird((resolve: any) => {
      resolve(options.actions.init());
    });
  }
};

const promiseSetNs: (options: ISelectorControllerOptions, ns: string | null | undefined) => Bluebird<ISelectorModel> =
(options, ns) => {
  if (ns) {
    const newModel: ISelectorModel = options.actions.get();
    // Cargar lista de types
    return loadList(options, {locale: newModel.locale!, ns}).then((types: string[]) => {
      options.actions.setNs(ns);
      options.actions.setType(null);
      return options.actions.setTypeList(types);
    });
  } else {
    return new Bluebird((resolve: any) => {
      options.actions.setNs(null);
      options.actions.setType(null);
      resolve(options.actions.setTypeList([]));
    });
  }
};

const promiseSetType: (options: ISelectorControllerOptions, type: string | null | undefined) =>
  Bluebird<ISelectorModel> =
(options, type) => {
  if (type) {
    const newModel: ISelectorModel = options.actions.setType(type);
    return new Bluebird((resolve: any) => {
      resolve(newModel);
    });
  } else {
    return new Bluebird((resolve: any) => {
      resolve(options.actions.get());
    });
  }
};

const getOptions: (options: ISelectorControllerOptions, reload: boolean) => ISelectorOptions =
(options, reload) => {
  const newModel: ISelectorModel = options.actions.get();
  return {
    locale: newModel.locale!,
    ns: newModel.ns!,
    type: newModel.type!,
    reload,
  };
};

const emitType: (options: ISelectorControllerOptions, reload: boolean) => (model: ISelectorModel) => ISelectorModel =
(options, reload) => (model) => {
  if (model.type) {
    options.sb.emit('selector.select', getOptions(options, reload));
  }
  return model;
};

const controller: (options: ISelectorControllerOptions) => ISelectorController =
(options) => {
  const stream$: flyd.Stream<ISelectorModel> = flyd.stream();

  const init: (config: ISelectorOptions) => void =
  (config)  => {
    loadList(options, {}).then((list: string[]) => {
      options.actions.setLocaleList(list);
    }).then(() => {
      return promiseSetLocale(options, config.locale);
    }).then(() => {
      return promiseSetNs(options, config.ns);
    }).then(() => {
      return promiseSetType(options, config.type);
    }).then(stream$);
  };

  const refresh: () => void =
  () => emitType(options, true);

  return {
    init,
    setLocale: (locale: string) => promiseSetLocale(options, locale).then(stream$),
    setNs: (ns: string) => promiseSetNs(options, ns).then(stream$),
    setType: (type: string) => promiseSetType(options, type).then(emitType(options, false)).then(stream$),
    refresh: () => emitType(options, true)(options.actions.get()),
    stream$,
  };
};

export { controller, ISelectorController, ISelectorOptions };
