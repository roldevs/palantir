import * as R from 'ramda';
import * as scaleApp from 'scaleapp';

const ls = (core: any) => {
  let id: any;
  let m: any;
  let results: any;
  results = [];
  for (id in core) {
    if (core.hasOwnProperty(id)) {
      m = core[id];
      results.push(id);
    }
  }
  return results;
};

const lsPlugins = (core: any) => {
  let ref: any;
  let ref1: any;
  const results: any = [];
  for (ref of core._plugins) {
    ref1 = ref.plugin;
    if ((ref1 != null ? ref1.id : void 0) != null) {
      results.push(ref.plugin.id);
    }
  }
  return results;
};

const pluginFn: scaleApp.IPluginInitFn = (core: any) => {
  core.lsInstances = () => ls(core._instances);
  core.lsModules = () => ls(core._modules);
  core.lsPlugins = () => lsPlugins(core);

  return {
    init: () => { /* Empty method placeholder */ },
    destroy: () => { /* Empty method placeholder */ },
  };
};

export default pluginFn;
