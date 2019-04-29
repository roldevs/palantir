import { IMetaCathegoryResult } from '../../../lib/typings';
import cathegoriesIndexRequest from './cathegories/index';
import cathegoriesShowRequest from './cathegories/show';

const cathegoriesApiController = () => {
  const index = (req: any, res: any) => {
    return cathegoriesIndexRequest(req, res).then((data: Array<number | string>) => {
      res.json({
        success: true,
        data,
      });
    });
  };

  const show = (req: any, res: any) => {
    return cathegoriesShowRequest(req, res).then((data: IMetaCathegoryResult[]) => {
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

export default cathegoriesApiController;
