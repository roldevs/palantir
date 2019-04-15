// tslint:disable:no-console
// This file is called from an npm script
import localConnector from './src/lib/connectors/local';
import metaPersistenceModule from './src/lib/meta/persistence';

// Generate metafile
console.log('Generating meta file');
const connector = localConnector({ rootPath: './definitions' });
metaPersistenceModule({
  connector,
  metaFilePath: './meta.yml',
}).write().then(() => console.log('-> Meta file generated')).catch((error: any) => {
  // tslint:disable-next-line:no-console
  console.log(error);
});
