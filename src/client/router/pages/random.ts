import Bluebird from 'bluebird';
import * as R from 'ramda';

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

const startModule: (options: { core: any }, name: string, el: string, moduleOptions: any) => Bluebird<void> =
(options, name, el, moduleOptions) => {
  return options.core.scaleApp.moduleStart(name, {
    options: R.merge({el}, moduleOptions),
  });
};

// Esta page es llamada con /random[/:locale[/:ns[/:type]]]:
const randomPage: (
  options: {
    core: any,
  },
) => any =
(options) => {
  const page: (locale: string, ns: string, type: string) => any =
  (locale, ns, type) => {
    const moduleOptions = parseOptions(locale, ns, type);

    return options.core.scaleApp.stopAllModules().then(() => {
      return startModule(options, 'layout', 'application', moduleOptions,
      ).then(() => {
        return startModule(options, 'selector', 'header', moduleOptions);
      }).then(() => {
        return startModule(options, 'results', 'body', moduleOptions);
      });
    });
  };

  return {
    page,
  };
};

export default randomPage;
