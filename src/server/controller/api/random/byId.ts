import Bluebird from 'bluebird';
import { IWorldElement } from '../../../../lib/typings';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import { requestPath } from '../../../util';
import getWorld from '../world';

const randomByIdRequest: (req: any, res: any) => Bluebird<IWorldElement[]> =
(req, res) => {
  return trackEvent(`/api/random/${req.params.id}`, 'Folders').then(() => {
    return getWorld({locale: req.params.locale}).getById(req.params.id);
  }).catch(errorHandler(res, process.env).error);
};

export default randomByIdRequest;
