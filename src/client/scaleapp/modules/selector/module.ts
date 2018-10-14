import flyd from 'flyd';
import snabbdomPatch from '../../../snabbdom_renderer';
import { controller, ISelectorController } from './controller';
import {
  actions,
  ISelectorActions,
  ISelectorModel,
} from './model';
import viewFn from './view';

const layoutModule = (sb: any) => {
  let vdom: any;
  const controllerHandler: ISelectorController = controller({
    sb,
    actions: actions(),
  });

  const onModuleInit = (config: any, done: () => void) => {
    vdom = document.getElementById(config.el);
    flyd.on(render, controllerHandler.stream$);
    controllerHandler.init(config);
    done();
  };

  const onModuleDestroy = (done: () => void) => {
    done();
  };

  const render: (model: ISelectorModel) => void =
  (model) => {
    vdom = snabbdomPatch(vdom, viewFn(model, controllerHandler));
    setHasher(model);
  };

  const setHasher: (model: ISelectorModel) => void =
  (model) => {
    const hash: string[] = ['random'];

    if (model.locale) {
      hash.push(model.locale);
    }

    if (model.ns) {
      hash.push(model.ns);
    }

    if (model.type) {
      hash.push(model.type);
    }

    sb.hasher.setHashWithoutNavigate(hash.join('/'));
  };

  return {
    init: onModuleInit,
    destroy: onModuleDestroy,
  };
};

export default layoutModule;
