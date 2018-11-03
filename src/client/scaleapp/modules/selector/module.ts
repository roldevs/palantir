import flyd from 'flyd';
import { compactArray } from '../../../../lib/utils';
import snabbdomPatch from '../../../snabbdom_renderer';
import { controller, ISelectorController } from './controller';
import {
  actions,
  ISelectorModel,
} from './model';
import viewFn from './view';

const setHasher: (sb: any, model: ISelectorModel) => void =
(sb, model) => {
  const hash: string[] = ['random'];
  hash.push(model.locale!);
  hash.push(model.ns!);
  hash.push(model.type!);

  sb.hasher.setHashWithoutNavigate(
    compactArray(
      hash,
    ).join('/'),
  );
};

const layoutModule = (sb: any) => {
  let vdom: any;
  const controllerHandler: ISelectorController = controller({ sb, actions: actions() });

  const onModuleInit = (config: any, done: () => void) => {
    vdom = document.getElementById(config.el);
    flyd.on(render, controllerHandler.stream$);
    controllerHandler.init(config);
    done();
  };

  const onModuleDestroy = (done: () => void) => done();

  const render: (model: ISelectorModel) => void = (model) => {
    vdom = snabbdomPatch(vdom, viewFn(model, controllerHandler));
    setHasher(sb, model);
  };

  return {
    init: onModuleInit,
    destroy: onModuleDestroy,
  };
};

export default layoutModule;
