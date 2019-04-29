import { IMetaCategoryResult } from '../../../lib/typings';
import categoriesIndexRequest from './categories/index';
import categoriesShowRequest from './categories/show';

const categoriesApiController = () => {
  const index = (req: any, res: any) => {
    return categoriesIndexRequest(req, res).then((data: Array<number | string>) => {
      res.json({
        success: true,
        data,
      });
    });
  };

  const show = (req: any, res: any) => {
    return categoriesShowRequest(req, res).then((data: IMetaCategoryResult[]) => {
      res.json({
        success: true,
        data,
      });
    });
  };

  return {
    index,
    show,
  };
};

export default categoriesApiController;
