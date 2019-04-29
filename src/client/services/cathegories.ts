import axios from 'axios';

const cathegoriesServices: (
  config?: any,
) => any =
function(_) {
  const index: () => any = () => axios.get('/api/cathegories.json');
  const show: (cathegory: string) => any =
    (cathegory) => axios.get(`/api/cathegories/${cathegory}.json`);
  return {
     index,
     show,
   };
};

export default cathegoriesServices;
