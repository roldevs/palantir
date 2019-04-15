import Bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';

const writeFile: (filePath: string, content: string) => Bluebird<string> =
(filePath, content) => new Bluebird((resolve, reject) => {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(content);
    }
  });
});

const readFile: (filePath: string) => Bluebird<string> =
(filePath) => {
  return new Bluebird((resolve: any, reject: any) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const unlinkFile: (filePath: string) => Bluebird<string> =
(filePath) => {
  return new Bluebird((resolve: any, reject: any) => {
    fs.unlink(filePath, (err) => {
      if (!err || err.code === 'ENOENT') {
        resolve(path);
      } else {
        reject(err);
      }
    });
  });
};

const getAllFiles: (rootDir: string) => string[] = (rootDir) =>
  fs.readdirSync(rootDir).reduce((files: string[], file: string) => {
    const name = path.join(rootDir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

export {
  getAllFiles,
  readFile,
  writeFile,
  unlinkFile,
};
