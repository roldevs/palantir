import snabbdomPatch from '../../../../snabbdom_renderer';
import viewFn from './view';

const layoutModule = (_: any) => {
  let vdom: any;

  const onModuleInit = (config: any, done: () => void) => {
    vdom = document.getElementById(config.el);
    vdom = snabbdomPatch(vdom, viewFn());
    done();
  };

  const onModuleDestroy = (done: () => void) =>  done();

  return {
    init: onModuleInit,
    destroy: onModuleDestroy,
  };
};

export default layoutModule;
