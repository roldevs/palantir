// tslint:disable:no-console
// This file is called from an npm script
import metaModule from './src/lib/meta';

// Generate metafile
console.log('Generating meta file');
metaModule({
  rootPath: './definitions',
  metaFilePath: './meta.yml',
}).write().then(() => console.log('-> Meta file generated'));
