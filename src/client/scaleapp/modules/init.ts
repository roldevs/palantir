import layoutModule from './layout/module';
import resultsModule from './results/module';
import selectorModule from './selector/module';

export default (core: any) => {
  core.register('layout', layoutModule);
  core.register('selector', selectorModule);
  core.register('results', resultsModule);
};
