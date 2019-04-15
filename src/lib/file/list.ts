import Bluebird from 'bluebird';
import R from 'ramda';
import { getAllFiles } from '../file';
import { ISearchDefinition } from '../typings';

type TFileListModule = (rootPath: string) => {
  list: () => Bluebird<ISearchDefinition[]>;
};

const FileListModule: TFileListModule =
(rootPath) => {
  const locale: (filePath: string) => string =
  (filePath) => R.nth(1, R.split('/', filePath))!;

  const ns: (filePath: string) => string =
  (filePath) => R.nth(2, R.split('/', filePath))!;

  const file: (filePath: string) => string =
  (filePath) => R.nth(3, R.split('/', filePath))!;

  const type: (filePath: string) => string =
  (filePath) => R.head(R.split('.', file(filePath)))!;

  const pathToFileData: (filePath: string) => ISearchDefinition =
  (filePath) => {
    return {
      locale: locale(filePath),
      ns: ns(filePath),
      type: type(filePath),
    };
  };

  const list: () => Bluebird<ISearchDefinition[]> =
  () => {
    return Bluebird.resolve(
      R.map(pathToFileData, getAllFiles(rootPath)),
    );
  };

  return {
    list,
  };
};

export default FileListModule;
