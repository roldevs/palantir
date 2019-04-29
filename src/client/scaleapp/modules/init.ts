import categoriesIndexModule from './categories/index/module';
import categoriesShowModule from './categories/show/module';
import categoriesTitleModule from './categories/title/module';
import layoutModule from './layout/module';
import resultsModule from './results/module';
import selectorModule from './selector/module';

export default (core: any) => {
  core.register('layout', layoutModule);
  core.register('selector', selectorModule);
  core.register('results', resultsModule);
  core.register('categories.title', categoriesTitleModule);
  core.register('categories.index', categoriesIndexModule);
  core.register('categories.show', categoriesShowModule);
};
