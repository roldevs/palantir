import axios from 'axios';

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
    if (options.type) {
      return axios.get(`/api/types/${options.locale}/${options.ns}/${options.type}.json`);
    }

    if (options.ns) {
      return axios.get(`/api/types/${options.locale}/${options.ns}.json`);
    }

    if (options.locale) {
      return axios.get(`/api/types/${options.locale}.json`);
    }
    return axios.get(`/api/types.json`);
   };

  return {
     index,
   };
};

export default folderServices;
