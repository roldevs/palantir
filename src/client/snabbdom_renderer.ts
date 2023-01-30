
import {
  init,
  attributesModule,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  VNode,
} from 'snabbdom';


const render: (
  oldVNode: VNode | HTMLElement,
  vnode: VNode,
) => void =
function(oldVNode, vnode) {
  // Init patch function with choosen modules
  const patch: any = init([
    classModule,
    attributesModule,
    propsModule,
    styleModule,
    eventListenersModule,
  ]);
  return patch(oldVNode, vnode);
};

export default render;
