import { join } from 'path';
import * as R from 'ramda';

const localeFolder = () => {
  const folder = (_: any) => join(process.env.PWD!, 'definitions');

  return {
    folder,
  };
};

export default localeFolder;
