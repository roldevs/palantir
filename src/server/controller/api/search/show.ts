import Bluebird from 'bluebird';
import { ISearchDefinition } from '../../../../lib/typings';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import getWorld from '../world';

const searchShowRequest: (req: any, res: any) => Bluebird<ISearchDefinition[]> =
  (req, res) => {
    return trackEvent(`/api/search/${req.params.term}`, 'Search').then(() => {
      return getWorld({
        locale: req.params.locale,
      }).getByTerm(req.params.term);
    }).catch(errorHandler(res, process.env).error);
  };

export default searchShowRequest;
