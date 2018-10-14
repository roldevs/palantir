// tslint:disable:no-console
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
    console.group('page');
    console.log(locale, ns, type);
    console.log(parseOptions(locale, ns, type));
    console.groupEnd();

    return options.core.scaleApp.moduleStart('layout', {
      options: R.merge({
        el: 'application',
      }, parseOptions(locale, ns, type)),
    }).then(() => {
      return options.core.scaleApp.moduleStart('selector', {
        options: R.merge({
          el: 'selector',
        }, parseOptions(locale, ns, type)),
      });
    }).then(() => {
      return options.core.scaleApp.moduleStart('results', {
        options: R.merge({
          el: 'results',
        }, parseOptions(locale, ns, type)),
      });
    });
  };

  return {
    page,
  };
};

export default randomPage;
