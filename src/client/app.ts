
type IApplication= (config: { el: string}) => {
  init: () => void;
};

const app: IApplication =
(config) => {
  // let vdom: any = document.getElementById(opts.el);
  // vdom = SnabbdomPatch(vdom, view);

  const init: () => void = () => {
    // tslint:disable-next-line:no-console
    console.log('Init', config);
  };

  return {
    init,
  };
};

export default app;
