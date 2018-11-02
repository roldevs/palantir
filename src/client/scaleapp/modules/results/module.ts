import flyd from 'flyd';
import snabbdomPatch from '../../../snabbdom_renderer';
import { ISelectorOptions } from '../selector/controller';
import { controller, IResultsController, IResultsState } from './controller';
import { actions } from './model';
import viewFn from './view';

const layoutModule = (sb: any) => {
  let vdom: any;
  const subscriptions = {
    selector: null,
  };
  const controllerHandler: IResultsController = controller({
    sb,
    actions: actions(),
  });

  const onSelectorSelect: (options: ISelectorOptions) => void =
  (options) => {
    controllerHandler.setOptions(options);
  };

  const onModuleInit = (config: any, done: () => void) => {
    vdom = document.getElementById(config.el);
    subscriptions.selector = sb.on('selector.select', onSelectorSelect);
    flyd.on(render, controllerHandler.stream$);
    controllerHandler.init(config);
    done();
  };

  const onModuleDestroy = (done: () => void) => {
    sb.scaleApp.cleanSubscriptions(subscriptions);
    done();
  };

  const render: (model: IResultsState) => void =
  (model) => {
    vdom = snabbdomPatch(vdom, viewFn(model, controllerHandler));
  };

  return {
    init: onModuleInit,
    destroy: onModuleDestroy,
  };
};

export default layoutModule;
