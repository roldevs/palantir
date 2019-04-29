// tslint:disable:no-console
import crossroads from 'crossroads';
import * as hasher from 'hasher';
import categoriesIndexPage from './pages/categories/index';
import categoriesShowPage from './pages/categories/show';
import randomPage from './pages/random';

const bypassed: (request: any) => void =
(request) => {
    console.group('crossroads: bypassed');
    // tslint:disable-next-line:no-console
    console.log(request);
    console.groupEnd();
};

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

const addRoute: (pattern: any, handler: any) => any =
(pattern, handler) => {
  crossroads.addRoute(pattern, handler);
};

const initRouter: (config: {
  core: any,
}) => any =
(config) => {
  // Set if crossroads should typecast route paths
  crossroads.shouldTypecast = true;
  crossroads.bypassed.add(bypassed);

  const init: () => any =
  () => {
    addRoute('', randomPage({core: config.core}).page);
    addRoute('/random/:locale:/:ns:/:type:', randomPage({core: config.core}).page);
    addRoute('/categories', categoriesIndexPage({core: config.core}).page);
    addRoute('/categories/:category:', categoriesShowPage({core: config.core}).page);
    initHasher();
  };

  return {
    init,
  };
};

export default initRouter;
