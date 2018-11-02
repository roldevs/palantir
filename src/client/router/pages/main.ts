import Bluebird from 'bluebird';
import * as R from 'ramda';

// Esta page es llamada con /random[/:locale[/:ns[/:type]]]:
const randomPage: (
  options: {
    core: any,
  },
) => any =
(options) => {
  const parseOptions: (locale: string, ns: string, type: string) => any =
  (locale, ns, type) => {
    // Crossroads envía los parametros de la ruta como
    // un array de valores, hay que mapearlos a un objeto para
    // pasarselo al modulo
    return {
      locale,
      ns,
      type,
    };
  };

  const page: (locale: string, ns: string, type: string) => any =
  (locale, ns, type) => {
    const moduleOptions = parseOptions(locale, ns, type);

    return startModule(
      'layout', 'application', moduleOptions,
    ).then(() => {
      return startModule('selector', 'selector', moduleOptions);
    }).then(() => {
      return startModule('results', 'results', moduleOptions);
    });
  };

  const startModule: (name: string, el: string, moduleOptions: any) => Bluebird<void> =
  (name, el, moduleOptions) => {
    if (options.core.scaleApp.isModuleRunning(name)) {
      return Bluebird.resolve();
    }

    return options.core.scaleApp.moduleStart(name, {
      options: R.merge({el}, moduleOptions),
    });
  };

  return {
    page,
  };
};

export default randomPage;
