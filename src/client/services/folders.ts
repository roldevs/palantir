import axios from 'axios';
import * as R from 'ramda';
import { compactArray } from '../../lib/utils';

const folderServices: (
  config?: any,
) => any =
function(_) {
  const index: (
    options: {
      locale?: string,
      ns?: string,
      type?: string,
    },
  ) => any =
  function(options) {
    const params: string = R.join('/', compactArray([
      options.locale!,
      options.ns!,
      options.type!,
    ]));

    if (R.isEmpty(params)) {
      return axios.get(`/api/types.json`);
    }

    return axios.get(`/api/types/${params}.json`);
  };

  return {
     index,
   };
};

export default folderServices;
