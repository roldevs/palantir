import { join } from 'path';
import * as R from 'ramda';

const nsFolder = () => {
  const folder = (req: any) => join(process.env.PWD!, 'definitions', req.params.locale);

  return {
    folder,
  };
};

export default nsFolder;
