import * as R from 'ramda';

const requestPath: (req: any) => string =
(req) => {
  const pathParts = [];
  pathParts.push(req.params.locale);
  pathParts.push(req.params.ns);
  pathParts.push(req.params.type);
  return R.join('/', R.filter(R.T, pathParts));
};

export {
  requestPath,
};
