import Bluebird from 'bluebird';
import * as R from 'ramda';

const parseOptions: (category: string) => any =
(category) => {
  // Crossroads envía los parametros de la ruta como
  // un array de valores, hay que mapearlos a un objeto para
  // pasarselo al modulo
  return { category };
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
  const page: (category: string) => any =
  (category) => {
    const moduleOptions = parseOptions(category);

    return options.core.scaleApp.stopAllModules().then(() => {
      return startModule(options, 'layout', 'application', moduleOptions).then(() => {
        return Promise.all([
          startModule(options, 'categories.title', 'header', moduleOptions),
          startModule(options, 'categories.show', 'body', moduleOptions),
        ]);
      });
    });
  };

  return {
    page,
  };
};

export default categoriesPage;
