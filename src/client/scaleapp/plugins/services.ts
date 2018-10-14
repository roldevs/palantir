import * as hasher from 'hasher';
import * as R from 'ramda';
import * as scaleApp from 'scaleapp';
import servicesInit from '../../services/init';

const pluginFn: scaleApp.IPluginInitFn = (core: any) => {
  'use strict';

  // Inicializar los servicios
  const services = servicesInit({core});

  /* Inicializar el plugin
   */
  const onPluginInit = function(_: any) {
    // function placeholder
  };

  /* Liberar medios
   */
  const onPluginDestroy = function() {
    // function placeholder
  };

  // Extender el core
  core.services = services;

  // Extender el sandbox
  core.Sandbox.prototype.services = services;

  return {
    init: onPluginInit,
    destroy: onPluginDestroy,
  };
};

export default pluginFn;
