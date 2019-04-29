import axios from 'axios';

const categoriesServices: (
  config?: any,
) => any =
function(_) {
  const index: () => any = () => axios.get('/api/categories.json');
  const show: (category: string) => any =
    (category) => axios.get(`/api/categories/${category}.json`);
  return {
     index,
     show,
   };
};

export default categoriesServices;
