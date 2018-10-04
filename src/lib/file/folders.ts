
import Bluebird from 'bluebird';
import { lstatSync, readdir } from 'fs';
import { join } from 'path';
import * as R from 'ramda';
import {
  IFolderModule,
} from '../typings';

const folderModule: IFolderModule =
(rootPath) => {
  const isDirectory: (source: string) => boolean = (source) => lstatSync(join(rootPath, source)).isDirectory();
  const folders: () => Bluebird<string[]> =
  () => {
    return new Bluebird((resolve, reject) => {
      readdir(rootPath, (err, files) => err ? reject(err) : resolve(files));
    });
  };

  return {
    folders,
  };
};

export default folderModule;
