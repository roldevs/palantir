
import Bluebird from 'bluebird';

type uuid = string;

enum ERandomOption {
  random = 'ramdom', // Generate a new Element
  all = 'all', // Choose an existing Element or generate a new one
  exists = 'exists', // Choose only existing Element
}

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

interface ITestRepositoryOptions {
  elements: {
    [locale: string]: {
      [ns: string]: {
        [type: string]: IElementDefinition; // Mybe SavedDefinition
      };
    };
  };
}

interface IConnectorFactory {
  get: (locator: ITableLocator) => Bluebird<IOptionalElementDefinition>;
}

interface IRepositoryFactory {
  get: (/* TODO */) => Bluebird<IOptionalElementDefinition>;
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
  guid: uuid;
  text: string;
  type: string;
  description?: string;
  related?: {
    [details: string]: string; // Related to a IElement.GUID
  };
}

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
  IOptionalElementDefinition,
  ITableLocator,
  IConnectorFactory,
  IRepositoryFactory,
  ILocalConnectorOptions,
  ITestConnectorOptions,
  ITestRepositoryOptions,
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
  IAliasDefinition,
  ILocalizeOptions,
  IPersistanceSave,
};
