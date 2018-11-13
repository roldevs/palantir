// tslint:disable:no-console
// This file is called from an npm script
import metaPersistenceModule from './src/lib/meta/persistence';

// Generate metafile
console.log('Generating meta file');
metaPersistenceModule({
  rootPath: './definitions',
  metaFilePath: './meta.yml',
}).write().then(() => console.log('-> Meta file generated')).catch((error: any) => {
  // tslint:disable-next-line:no-console
  console.log(error);
});
