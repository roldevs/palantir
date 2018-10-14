import Bluebird from 'bluebird';
import flyd from 'flyd';
import * as R from 'ramda';
import { ISelectorActions, ISelectorModel } from './model';

interface ISelectorOptions {
  locale?: string;
  ns?: string;
  type?: string;
}

interface ISelectorController {
  init: (config: ISelectorOptions) => void;
  setLocale: (locale: string) => void;
  setNs: (ns: string) => void;
  setType: (type: string) => void;
  stream$: flyd.Stream<ISelectorModel>;
}

interface ISelectorControllerOptions {
  sb: any; // appScale Sandbox
  actions: ISelectorActions;
}

const controller: (options: ISelectorControllerOptions) => ISelectorController =
(options) => {
  const stream$: flyd.Stream<ISelectorModel> = flyd.stream();

  const loadList: (config: ISelectorOptions) => Bluebird<string[]> =
  (config) => options.sb.services.folders.index(config).then(R.prop('data'));

  const init: (config: ISelectorOptions) => void =
  (config)  => {
    loadList({}).then((list: string[]) => {
      options.actions.setLocaleList(list);
    }).then(() => {
      return promiseSetLocale(config.locale);
    }).then(() => {
      return promiseSetNs(config.ns);
    }).then(() => {
      return promiseSetType(config.type);
    }).then(stream$);
  };

  const promiseSetLocale: (locale: string | null | undefined) => Bluebird<ISelectorModel> = (locale) => {
    if (locale)  {
      // Cargar lista de ns
      return loadList({locale}).then((nss: string[]) => {
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

  const promiseSetNs: (ns: string | null | undefined) => Bluebird<ISelectorModel> =
  (ns) => {
    if (ns) {
      const newModel: ISelectorModel = options.actions.get();
      // Cargar lista de types
      return loadList({locale: newModel.locale!, ns}).then((types: string[]) => {
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

  const promiseSetType: (type: string | null | undefined) => Bluebird<ISelectorModel> =
  (type) => {
    if (type) {
      return new Bluebird((resolve: any) => {
        const newModel: ISelectorModel = options.actions.setType(type);
        const selectorOptions: ISelectorOptions = {
          locale: newModel.locale!,
          ns: newModel.ns!,
          type: newModel.type!,
        };

        options.sb.emit('selector.select', selectorOptions);
        resolve(newModel);
      });
    } else {
      return new Bluebird((resolve: any) => {
        resolve(options.actions.get());
      });
    }
  };

  return {
    init,
    setLocale: (locale: string) => promiseSetLocale(locale).then(stream$),
    setNs: (ns: string) => promiseSetNs(ns).then(stream$),
    setType: (type: string) => promiseSetType(type).then(stream$),
    stream$,
  };
};

export { controller, ISelectorController, ISelectorOptions };
