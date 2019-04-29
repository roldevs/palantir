import flyd from 'flyd';
import { IMetaCathegoryResult } from '../../../../../lib/typings';
import snabbdomPatch from '../../../../snabbdom_renderer';
import { controller, IResultsController } from './controller';
import { actions } from './model';
import viewFn from './view';

const layoutModule = (sb: any) => {
  let vdom: any;
  const subscriptions = {};
  const controllerHandler: IResultsController = controller({ sb, actions: actions() });

  const onModuleInit = (config: any, done: () => void) => {
    vdom = document.getElementById(config.el);
    flyd.on(render, controllerHandler.stream$);
    controllerHandler.init(config.cathegory);
    done();
  };

  const onModuleDestroy = (done: () => void) => {
    sb.scaleApp.cleanSubscriptions(subscriptions);
    done();
  };

  const render: (model: IMetaCathegoryResult[]) => void = (model) => {
    vdom = snabbdomPatch(vdom, viewFn(model, controllerHandler));
  };

  return { init: onModuleInit, destroy: onModuleDestroy };
};

export default layoutModule;
