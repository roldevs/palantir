import Bluebird from 'bluebird';
import { IMetaCategoryResult, IWorldElement } from '../../../../lib/typings';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import getWorld from '../world';

const categoryShowRequest: (req: any, res: any) => Bluebird<IMetaCategoryResult[]> =
  (req, res) => {
    return trackEvent(`/api/categories/${req.params.id}`, 'Categories').then(() => {
      return getWorld({
        locale: req.params.locale,
      }).getCategory(req.params.id);
    }).catch(errorHandler(res, process.env).error);
  };

export default categoryShowRequest;
