
import Bluebird from 'bluebird';

type uuid = string;

enum ERandomOption {
  definition = 'definition', // Generate a new Element
  all = 'all', // Choose an existing Element or generate a new one
  existing = 'existing', // Choose only existing Element
}

interface ISearchDefinition {
  ns: string;
  type: string;
  random?: ERandomOption;
}

interface IRelatedElement {
  text?: string;
  search: ISearchDefinition[];
  results?: Array<IElementDefinition | IElement>; // Here is save the result
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

interface IFormattedResults {
  [key: string]: IFormattedResult;
}

interface IFormattedResult {
  text?: string;
  related?: IFormattedResults;
  results?: IFormattedResult[];
}

type IOptionalElementDefinition = IElementDefinition | null | undefined;

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

type ISearchResult = Array<IElement | IElementDefinition>;

interface ITableLocator {
  locale: string;
  ns: string;
  type: string;
}

interface ILocalConnectorOptions {
  rootPath: string;
}

interface IRemoteConnectorOptions {
  debug?: boolean;
  baseURL: string;
}

interface ITestConnectorOptions {
  elements: {
    [locale: string]: {
      [ns: string]: {
        [type: string]: IElementDefinition;
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
  getByGuid: (guid: uuid) => Bluebird<IOptionalElement>;
  search: (search: ISearchDefinition) => Bluebird<IElement[]>;
}

interface IWorldDefinition {
  locale: string;
  connector: IConnectorFactory;
  repository: IRepositoryFactory;
}

type IWorldModule = (world: IWorldDefinition) => {
  get: (search: IRelatedElement) => Bluebird<Array<IOptionalElementDefinition | IOptionalElement>>;
};

type IElementModule = (world: IWorldDefinition) => {
  get: (element: IOptionalElementDefinition | IOptionalElement) => Bluebird<IOptionalElementDefinition>;
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
  find: (search: ISearchDefinition[]) => Bluebird<ISearchResult>;
};

type ISearchByTypeModule = (world: IWorldDefinition) => {
  find: (search: ISearchDefinition) => Bluebird<ISearchResult>;
};

type IRandomModule = (world: IWorldDefinition) => {
  random: (search: ISearchDefinition[]) => Bluebird<IOptionalElement | IOptionalElementDefinition>;
};

type ICliModule = (args: string[]) => {
  get: () => Bluebird<IFormattedResult[]>;
};

type IFormatterModule = () => {
  format: (elements: IElementDefinition[]) => Bluebird<IFormattedResult[]>;
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
  IRemoteConnectorOptions,
  ITestConnectorOptions,
  IRepositoryOptions,
  IElementModule,
  IOptionsModule,
  IRelatedModule,
  ISearchModule,
  ISearchByTypeModule,
  IRandomModule,
  IWorldModule,
  ICliModule,
  IFormatterModule,
  IFormattedResult,
  IFormattedResults,
  ERandomOption, //
  IElementDefinition,
  IWorldDefinition,
  ISearchDefinition,
  ISearchResult,
  IRelatedElement,
  IRelatedElements,
  IElement,
  IOptionalElement,
  IAliasDefinition,
  ILocalizeOptions,
  IPersistanceSave,
};
