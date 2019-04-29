import Bluebird from 'bluebird';
import R from 'ramda';
import { IWorldElement } from '../../../../lib/typings';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import getWorld from '../world';

const cathegoryIndexRequest: (req: any, res: any) => Bluebird<Array<string | number>> =
  (req, res) => {
    return trackEvent('/api/cathegories', 'Cathegories').then(() => {
      return getWorld({
        locale: req.params.locale,
      }).cathegories();
    }).catch(errorHandler(res, process.env).error);
  };

export default cathegoryIndexRequest;
