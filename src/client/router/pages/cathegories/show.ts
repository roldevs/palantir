import Bluebird from 'bluebird';
import * as R from 'ramda';

const parseOptions: (cathegory: string) => any =
(cathegory) => {
  // Crossroads envía los parametros de la ruta como
  // un array de valores, hay que mapearlos a un objeto para
  // pasarselo al modulo
  return { cathegory };
};

const startModule: (options: { core: any }, name: string, el: string, moduleOptions: any) => Bluebird<void> =
(options, name, el, moduleOptions) => {
  return options.core.scaleApp.moduleStart(name, {
    options: R.merge({el}, moduleOptions),
  });
};

// Esta page es llamada con /random[/:locale[/:ns[/:type]]]:
const cathegoriesPage: (
  options: {
    core: any,
  },
) => any =
(options) => {
  const page: (cathegory: string) => any =
  (cathegory) => {
    const moduleOptions = parseOptions(cathegory);

    return options.core.scaleApp.stopAllModules().then(() => {
      return startModule(options, 'layout', 'application', moduleOptions).then(() => {
        return Promise.all([
          startModule(options, 'cathegories.title', 'header', moduleOptions),
          startModule(options, 'cathegories.show', 'body', moduleOptions),
        ]);
      });
    });
  };

  return {
    page,
  };
};

export default cathegoriesPage;
