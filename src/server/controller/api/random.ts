import * as R from 'ramda';
import localConnectorCreator from '../../../lib/connectors/local';
import repositoryCreator from '../../../lib/repository/memory';
import worldCreator from '../../../lib/world';
import errorHandler from '../../errorHandler';

const randomApiController = () => {
  const random = (req: any, res: any) => {
    const locale: string = R.defaultTo('es', req.params.locale);
    const world = worldCreator({
      locale,
      connector: localConnectorCreator({
        rootPath: './definitions',
      }),
      repository: repositoryCreator({
        locale,
        elements: {},
      }),
    });

    world.get({
      search: [{
        ns: req.params.ns,
        type: req.params.type,
      }],
    }).then((data) => {
      res.json({
        succes: true,
        data,
      });
    }).catch(errorHandler(res, process.env).error);
  };

  return {
    random,
  };
};

export default randomApiController;
