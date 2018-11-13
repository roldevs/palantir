import Bluebird from 'bluebird';
import * as R from 'ramda';
import localConnectorCreator from '../../../../lib/connectors/local';
import metaModule from '../../../../lib/meta';
import repositoryCreator from '../../../../lib/repository/memory';
import { IMetaFactory, IWorldElement } from '../../../../lib/typings';
import worldCreator from '../../../../lib/world';
import errorHandler from '../../../errorHandler';
import trackEvent from '../../../track';
import { requestPath } from '../../../util';
import getWorld from '../world';

const randomIndexRequest: (req: any, res: any) => Bluebird<IWorldElement[]> =
(req, res) => {
  return trackEvent(`/api/random/${requestPath(req)}`, 'Folders').then(() => {
    return getWorld({
      locale: req.params.locale,
    }).get({
      search: [{
        locale: req.params.locale,
        ns: req.params.ns,
        type: req.params.type,
      }],
    });
  }).catch(errorHandler(res, process.env).error);
};

export default randomIndexRequest;
