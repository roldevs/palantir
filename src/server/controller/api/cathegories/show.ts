import Bluebird from 'bluebird';
import { IMetaCathegoryResult, IWorldElement } from '../../../../lib/typings';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import getWorld from '../world';

const cathegoryShowRequest: (req: any, res: any) => Bluebird<IMetaCathegoryResult[]> =
  (req, res) => {
    return trackEvent(`/api/cathegories/${req.params.id}`, 'Cathegories').then(() => {
      return getWorld({
        locale: req.params.locale,
      }).getCathegory(req.params.id);
    }).catch(errorHandler(res, process.env).error);
  };

export default cathegoryShowRequest;
