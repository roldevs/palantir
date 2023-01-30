import {h} from 'snabbdom';
import {VNode} from 'snabbdom';

const viewFn: () => VNode =
() => {
  return h('div', {
    props: {
      id: 'header',
    },
  }, [
    h('h3', {
      class: {
        ui: true,
        dividing: true,
        header: true,
      },
    }, [
      h('i', {
        class: {
          sitemap: true,
          icon: true,
        },
      }),
      h('div', {
        class: {
          content: true,
        },
      }, 'Categories' ),
    ]),
  ]);
};

export default viewFn;
