import * as R from 'ramda';
import { IWorldElement } from '../../../lib/typings';
import randomByIdRequest from './random/byId';
import randomIndexRequest from './random/index';

const indexRandomApiController = () => {
  const index = (req: any, res: any) => {
    return randomIndexRequest(req, res).then((data: IWorldElement[]) => {
      res.json({
        success: true,
        data: R.map(R.prop('format'), data),
        // data: R.map(R.pick(['format']), data),
      });
    });
  };

  const byId = (req: any, res: any) => {
    return randomByIdRequest(req, res).then((data: IWorldElement[]) => {
      res.json({
        success: true,
        data: R.map(R.pick(['format']), data),
      });
    });
  };

  return {
    index,
    byId,
  };
};

export default indexRandomApiController;
