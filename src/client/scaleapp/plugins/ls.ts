import * as R from 'ramda';
import * as scaleApp from 'scaleapp';

const pluginFn: scaleApp.IPluginInitFn = function(core: any) {
  'use strict';

  /* Inicializar el plugin
   */
  const onPluginInit = function() {
    // function placeholder
  };

  /* Liberar medios
   */
  const onPluginDestroy = function() {
    // function placeholder
  };

  // Extender el core
  const ls = function(o: any) {
    let id: any;
    let m: any;
    let results: any;
    results = [];
    for (id in o) {
      if (o.hasOwnProperty(id)) {
        m = o[id];
        results.push(id);
      }
    }
    return results;
  };

  core.lsInstances = function() {
   return ls(core._instances);
  };

  core.lsModules = function() {
   return ls(core._modules);
  };

  core.lsPlugins = function() {
    let p: any;
    let i: any;
    let len: any;
    let ref: any;
    let ref1: any;
    let results: any;
    ref = core._plugins;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
     p = ref[i];
     ref1 = p.plugin;
     if ((ref1 != null ? ref1.id : void 0) != null) {
       results.push(p.plugin.id);
     }
   }
    return results;
  };

  return {
    init: onPluginInit,
    destroy: onPluginDestroy,
  };
};

export default pluginFn;
