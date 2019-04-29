import cathegoriesIndexModule from './cathegories/index/module';
import cathegoriesShowModule from './cathegories/show/module';
import cathegoriesTitleModule from './cathegories/title/module';
import layoutModule from './layout/module';
import resultsModule from './results/module';
import selectorModule from './selector/module';

export default (core: any) => {
  core.register('layout', layoutModule);
  core.register('selector', selectorModule);
  core.register('results', resultsModule);
  core.register('cathegories.title', cathegoriesTitleModule);
  core.register('cathegories.index', cathegoriesIndexModule);
  core.register('cathegories.show', cathegoriesShowModule);
};
