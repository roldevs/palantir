import * as scaleapp from 'scaleapp';
import hasherPlugin from './hasher';
import lsPlugin from './ls';
import scaleAppPlugin from './scaleapp';
import servicesPlugin from './services';

export default (core: scaleapp.Core) => {
  // core.use(scaleApp.plugins.ls);
  core.use(lsPlugin);
  core.use(scaleAppPlugin);
  core.use(servicesPlugin);
  core.use(hasherPlugin);
};
