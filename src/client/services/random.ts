import axios from 'axios';

const randomServices: (
  config?: any,
) => any =
function(_) {
  const index: (
    options: {
      locale: string,
      ns: string,
      type: string,
    },
  ) => any =
  function(options) {
    return axios.get(`/api/random/${options.locale}/${options.ns}/${options.type}.json`);
   };

  return {
     index,
   };
};

export default randomServices;
