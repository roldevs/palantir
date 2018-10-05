import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';

const viewFn: () => VNode =
() => h('h1', 'Results');

export default viewFn;
