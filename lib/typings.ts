
import Bluebird from 'bluebird';

type uuid = string;

enum ERandomOption {
  random = 'ramdom', // Generate a new Element
  all = 'all', // Choose an existing Element or generate a new one
  exists = 'exists', // Choose only existing Element
}

interface ISearchDefinition {
  ns: string;
  type: string;
  random?: ERandomOption;
}

interface IRelatedElement {
  search: ISearchDefinition[];
  results?: Array<IOptionalElementDefinition | IElement>; // Here is save the result
  count?: number;
}

interface IRelatedElements {
  [details: string]: IRelatedElement;
}

interface IElementDefinition {
  text: string;
  options?: IElementDefinition[];
  related?: IRelatedElements;
}

type IOptionalElementDefinition = IElementDefinition | null;

interface IElement {
  ns: string;
  type: string;
  guid: uuid;
  text: string;
  related?: {
    [key: string]: string; // Related to a IElement.GUID
  };
}

type IOptionalElement = IElement | null | undefined;

interface ITableLocator {
  locale: string;
  ns: string;
  type: string;
}

interface ILocalConnectorOptions {
  rootPath: string;
}

interface ITestConnectorOptions {
  elements: {
    [locale: string]: {
      [ns: string]: {
        [type: string]: IOptionalElementDefinition;
      };
    };
  };
}

interface IRepositoryOptions {
  locale: string;
  elements: {
    [locale: string]: IElement[];
  };
}

interface IConnectorFactory {
  get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition>;
}

interface IRepositoryFactory {
  get: (guid: uuid) => Bluebird<IOptionalElement>;
  random: (search: ISearchDefinition[]) => Bluebird<IOptionalElement>;
}

interface IWorldDefinition {
  locale: string;
  connector: IConnectorFactory;
  repository: IRepositoryFactory;
}

type IElementModule = (world: IWorldDefinition) => {
  get: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition>;
};

type IOptionsModule = (world: IWorldDefinition) => {
  hasOptions: (element: IOptionalElementDefinition) => boolean,
  random: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition>;
};

type IRelatedModule = (world: IWorldDefinition) => {
  hasRelated: (element: IOptionalElementDefinition) => boolean,
  fetch: (element: IOptionalElementDefinition) => Bluebird<IOptionalElementDefinition>;
};

type ISearchModule = (world: IWorldDefinition) => {
  find: (search: ISearchDefinition[]) => Bluebird<IOptionalElementDefinition>;
};

/////////////////////////////////////////////////////////

interface IAliasDefinition {
  [details: string]: string[];
}

interface ILocalizeOptions {
  locale?: string;
  debug?: boolean;
  translations: {};
}

interface IPersistanceSave {
  element: IElement;
  existing: IElement[];
}

export {
  uuid,
  IOptionalElementDefinition,
  ITableLocator,
  IConnectorFactory,
  IRepositoryFactory,
  ILocalConnectorOptions,
  ITestConnectorOptions,
  IRepositoryOptions,
  IElementModule,
  IOptionsModule,
  IRelatedModule,
  ISearchModule,
  ERandomOption, //
  IElementDefinition,
  IWorldDefinition,
  ISearchDefinition,
  IRelatedElement,
  IRelatedElements,
  IElement,
  IOptionalElement,
  IAliasDefinition,
  ILocalizeOptions,
  IPersistanceSave,
};
