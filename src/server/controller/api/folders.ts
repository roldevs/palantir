import * as R from 'ramda';
import fileFoldersCreator from '../../../lib/file/folders';
import errorHandler from '../../errorHandler';
import trackEvent from '../../track';
import { requestPath } from '../../util';

const localeApiController = (queryFolder: any) => {
  const index = (req: any, res: any) => {
    trackEvent(`/api/types/${requestPath(req)}`, 'Folders').then(() => {
      return fileFoldersCreator(
        queryFolder.folder(req),
      ).folders();
    }).then((data: any) => {
      res.json({
        succes: true,
        data,
      });
    }).catch(errorHandler(res, process.env).error);
  };

  return {
    index,
  };
};

export default localeApiController;
