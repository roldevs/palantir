import fileFoldersCreator from '../../../lib/file/folders';
import errorHandler from '../../errorHandler';

const localeApiController = (queryFolder: any) => {
  const index = (req: any, res: any) => {
    fileFoldersCreator(
      queryFolder.folder(req),
    ).folders().then((data) => {
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
