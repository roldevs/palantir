import { join } from 'path';
import * as R from 'ramda';

const typeFolder = () => {
  const folder = (req: any) => join(process.env.PWD!, 'definitions', req.params.locale, req.params.ns);

  return {
    folder,
  };
};

export default typeFolder;
