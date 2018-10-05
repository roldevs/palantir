import * as scaleapp from 'scaleapp';
import lsPlugin from './ls';
import scaleAppPlugin from './scaleapp';

export default (core: scaleapp.Core) => {
  // core.use(scaleApp.plugins.ls);
  core.use(lsPlugin);
  core.use(scaleAppPlugin);
};
