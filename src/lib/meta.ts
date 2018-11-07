import Bluebird from 'bluebird';
import * as R from 'ramda';
import YAML from 'yaml';
import localConnector from './connectors/local';
import { readFile, unlinkFile, writeFile } from './file';
import folderModule from './file/folders';
import {
  IMeta,
  IMetaDefinition,
  IMetaModule,
} from './typings';
import {
  removeExtension,
} from './utils';

interface IFolderDefinition {
  folder: string;
  children: IFolderDefinition[];
}

const typeMeta: (rootPath: string, locale: string, ns: string) => (type: string) => Bluebird<IMeta> =
(rootPath, locale, ns) => (type) => {
  return localConnector({rootPath}).meta(({locale, ns, type: removeExtension(type)})).then(
    R.mergeDeepRight({ locator: { locale, ns, type: removeExtension(type) } }),
  );
};

const localeFolders: (rootPath: string) => Bluebird<string[]> =
(rootPath) => folderModule(rootPath).folders();

const nsFolders: (rootPath: string, locale: string) => Bluebird<string[]> =
(rootPath, locale) => folderModule(`${rootPath}/${locale}`).folders();

const typeFolders: (rootPath: string, locale: string, ns: string) => Bluebird<string[]> =
(rootPath, locale, ns) => folderModule(`${rootPath}/${locale}/${ns}`).folders();

const nsMeta: (rootPath: string, locale: string) => (ns: string) => Bluebird<IMeta[]> =
(rootPath, locale) => (ns) =>  typeFolders(rootPath, locale, ns).then(
  typeMetas(rootPath, locale, ns),
).then(R.flatten);

const typeMetas: (rootPath: string, locale: string, ns: string) => (types: string[]) => Bluebird<IMeta[]> =
(rootPath, locale, ns) =>
  (types) => Bluebird.map(types, typeMeta(rootPath, locale, ns));

const localeMeta: (rootPath: string) => (locale: string) => Bluebird<IMeta[]> =
(rootPath) => (locale) => nsFolders(rootPath, locale).then(nsMetas(rootPath, locale));

const nsMetas: (rootPath: string, locale: string) => (nss: string[]) => Bluebird<IMeta[]> =
(rootPath, locale) =>
  (nss) => Bluebird.map(nss, nsMeta(rootPath, locale)).then(flatMetas);

const localeMetas: (rootPath: string) => (locales: string[]) => Bluebird<IMeta[]> =
(rootPath) =>
  (locales) => Bluebird.map(locales, localeMeta(rootPath)).then(flatMetas);

const flatMetas: (metas: any) => IMeta[] = R.flatten;

const packMetas: (metas: IMeta[]) => IMetaDefinition =
(metas) => R.reduce<IMeta, IMetaDefinition>((acc: IMetaDefinition, meta: IMeta) => {
  return R.set(R.lensPath(['ids', meta.id!]), meta.locator, acc);
}, {ids: {}}, metas);

const metaModule: IMetaModule =
(options) => {
  const generate: () => Bluebird<IMetaDefinition> =
  () => localeFolders(
      options.rootPath,
    ).then(localeMetas(options.rootPath)).then(packMetas);

  const write: () => Bluebird<IMetaDefinition> =
  () => unlinkFile(options.metaFilePath).then(generate).then((meta: IMetaDefinition) => {
    writeFile(options.metaFilePath, YAML.stringify(meta));
    return meta;
  });

  const read: () => Bluebird<IMetaDefinition> =
  () => readFile(options.metaFilePath).then((data: string) => {
    return YAML.parse(data);
  });

  return {
    generate,
    read,
    write,
  };
};

export default metaModule;
