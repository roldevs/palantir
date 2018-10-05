import {h} from 'snabbdom';
import {VNode} from 'snabbdom/vnode';

const topNav: () => VNode =
() => {
  return h('div', {
    class: {
      ui: true,
      fixed: true,
      inverted: true,
      menu: true,
    },
  }, [
    h('div', {
      class: {
        ui: true,
        container: true,
      },
    }, [
      h('a', {
        class: {
          header: true,
          item: true,
        },
      }, 'Hall 9000' ),
    ]),
  ]);
};

const viewFn: () => VNode =
() => {
  return h('div', {
    props: {
      id: 'layout',
    },
  }, [
    topNav(),
    h('div', {
      class: {
        ui: true,
        main: true,
        text: true,
        container: true,
      },
    }, [
      h('div', { props: { id: 'selector' } } ),
      h('div', { props: { id: 'results' } } ),
    ]),
  ]);
};

export default viewFn;
