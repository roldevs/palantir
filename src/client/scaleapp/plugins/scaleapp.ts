import Bluebird from 'bluebird';
import * as R from 'ramda';
import * as scaleApp from 'scaleapp';

const moduleStart: (core: any) => (module: string, config: {}) => any =
  (core) => (module, config) => new Bluebird((resolve: any) => core.start(module, config, resolve));

const moduleStop: (core: any) => (module: string) => any =
(core) => (module) => {
  return new Bluebird((resolve: any) => {
    if (isModuleRunning(module)) {
      core.stop(module, resolve);
    } else {
      resolve();
    }
  });
};

const moduleEmit: (core: any) => (startEvent: string, endEvent: string, data: {}) => any =
(core) => (startEvent: string, endEvent: string, data: {}) => {
  return new Bluebird((resolve) => {
    let subscription: any;

    // Subscribirse a cuando el stage haya terminado de mostrar el cast
    subscription = core.on(endEvent, (eventData: {}) => {
        subscription.detach();
        resolve(eventData);
    });

    core.emit(startEvent, data);
  });
};

const stopModules: (core: any) => (instanceList: string[]) => any =
(_) => (instanceList) => Bluebird.map(instanceList, moduleStop);

const stopAllModules: (core: any) => () => any = (core) => () => stopAllModulesExcept(core)([]);

// Esta funcion se encarga de parar todos los modulos, excepto los que estan
// incluidos en el array pasado
const stopAllModulesExcept: (core: any) => (noStopInstances: string[]) => any =
(core) => (noStopInstances) => {
  // Hay que parar todos los modulos, excepto los que se pasan
  const runningInstances: any[] = R.without(
    noStopInstances,
    runningModules(core),
  );

  return core.scaleApp.stopModules(runningInstances);
};

const runningModules: (core: any) => any =
(core) => R.filter(isModuleRunning(core), core.lsInstances());

const isModuleRunning: (core: any) => (instance: string) => boolean = (core) => (instance) => core._running[instance];

const cleanSubscriptions: (core: any) => (subscriptions: any) => void =
(_) => (subscriptions) => {
  let subscription: any;
  for (subscription of R.keys(subscriptions)) {
    if (subscriptions[subscription]) {
      subscriptions[subscription].detach();
    }
  }
};

const pluginFn: scaleApp.IPluginInitFn = function(core: any) {
  const scaleAppFns = {
    moduleStart: moduleStart(core),
    moduleStop: moduleStop(core),
    moduleEmit: moduleEmit(core),
    stopModules: stopModules(core),
    stopAllModules: stopAllModules(core),
    runningModules: runningModules(core),
    isModuleRunning: isModuleRunning(core),
    cleanSubscriptions: cleanSubscriptions(core),
    stopAllModulesExcept: stopAllModulesExcept(core),
  };

  // Extender el core
  core.scaleApp = scaleAppFns;

  // Extender el sandbox
  core.Sandbox.prototype.scaleApp = scaleAppFns;

  return {
    init: () => { /* Empty method placeholder */ },
    destroy: () => { /* Empty method placeholder */ },
  };
};

export default pluginFn;
