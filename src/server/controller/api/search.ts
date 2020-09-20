import { ISearchDefinition } from '../../../lib/typings';
import searchShowRequest from './search/show';

const searchApiController = () => {
  const show = (req: any, res: any) => {
    return searchShowRequest(req, res).then((data: ISearchDefinition[]) => {
      res.json({
        success: true,
        data,
      });
    });
  };

  return {
    show,
  };
};

export default searchApiController;
