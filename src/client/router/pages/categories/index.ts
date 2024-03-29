import Bluebird from 'bluebird';
import * as R from 'ramda';

const parseOptions: (id: string) => any =
(id) => {
  // Crossroads envía los parametros de la ruta como
  // un array de valores, hay que mapearlos a un objeto para
  // pasarselo al modulo
  return { id };
};

const startModule: (options: { core: any }, name: string, el: string, moduleOptions: any) => Bluebird<void> =
(options, name, el, moduleOptions) => {
  return options.core.scaleApp.moduleStart(name, {
    options: R.mergeLeft({el}, moduleOptions),
  });
};

// Esta page es llamada con /random[/:locale[/:ns[/:type]]]:
const categoriesPage: (
  options: {
    core: any,
  },
) => any =
(options) => {
  const page: (id: string) => any =
  (id) => {
    const moduleOptions = parseOptions(id);

    return options.core.scaleApp.stopAllModules().then(() => {
      return startModule(options, 'layout', 'application', moduleOptions).then(() => {
        return Promise.all([
          startModule(options, 'categories.title', 'header', moduleOptions),
          startModule(options, 'categories.index', 'body', moduleOptions),
        ]);
      });
    });
  };

  return {
    page,
  };
};

export default categoriesPage;
