// tslint:disable:no-console
import crossroads from 'crossroads';
import * as hasher from 'hasher';
import randomPage from './pages/main';

const initRouter: (config: {
  core: any,
}) => any =
(config) => {
  // Set if crossroads should typecast route paths
  crossroads.shouldTypecast = true;

  // const addRoutes: () => void = function() {
  //   const routes = config.routes(options);
  //   R.forEach(function(route: any) {
  //     crossroads.addRoute(route, routes[route]);
  //   }, Object.keys(routes));
  // };

  crossroads.bypassed.add((request: any) => {
      console.group('crossroads: bypassed');
      // tslint:disable-next-line:no-console
      console.log(request);
      console.groupEnd();
  });

  // setup crossroads
  // crossroads.routed.add(function(request: any, data: any){
  // }); // log all routes

  // setup hasher
  const parseHash = function(newHash: string, oldHash: string) {
    // Parar primero todos los modulos
    if (newHash !== oldHash) {
      crossroads.parse(newHash);
    }
  };

  const initHasher = function() {
    hasher.initialized.add(parseHash); // parse initial hash
    hasher.changed.add(parseHash); // parse hash changes
    hasher.init(); // start listening for history change
  };

  // Atamos scaleApp a hasher de tal manera que cualquier modulo puede
  // invocar hasher (cambiar la ruta) lanzando un evento
  const initHasherSubscriptions = function() {
    config.core.on('hasher.setHash', function(eventData: any) {
      config.core.hasher.setHash(eventData);
    });
  };

  const addRoute: (pattern: any, handler: any) => any =
  (pattern, handler) => {
    crossroads.addRoute(pattern, handler);
  };

  const init: () => any =
  () => {
    addRoute('', randomPage({core: config.core}).page);
    addRoute('/random/:locale:/:ns:/:type:', randomPage(config.core).page);

    initHasher();
    initHasherSubscriptions();
  };

  return {
    init,
  };
};

export default initRouter;
