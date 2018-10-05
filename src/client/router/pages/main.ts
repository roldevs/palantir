import * as R from 'ramda';

// Esta page es llamada con /random[/:locale[/:ns[/:type]]]:
const randomPage: (
  options: {
    core: any,
  },
) => any =
(options) => {
  const parseOptions: (...routerOptions: any[]) => any =
  (routerOptions) => {
    // Crossroads envía los parametros de la ruta como
    // un array de valores, hay que mapearlos a un objeto para
    // pasarselo al modulo
    return {
      locale: R.view(R.lensProp('locale'), routerOptions),
      ns: R.view(R.lensProp('ns'), routerOptions),
      type: R.view(R.lensProp('type'), routerOptions),
    };
  };

  const page: (...routerOptions: any[]) => any =
  (routerOptions) => {
    return options.core.scaleApp.moduleStart('layout', {
      options: R.merge({
        el: 'application',
      }, parseOptions(routerOptions)),
    }).then(() => {
      return options.core.scaleApp.moduleStart('selector', {
        options: R.merge({
          el: 'selector',
        }, parseOptions(routerOptions)),
      });
    }).then(() => {
      return options.core.scaleApp.moduleStart('results', {
        options: R.merge({
          el: 'results',
        }, parseOptions(routerOptions)),
      });
    });
  };

  return {
    page,
  };
};

export default randomPage;
