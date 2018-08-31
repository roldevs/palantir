
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
  results?: Array<IElementDefinition | IElement>; // Here is save the result
  count?: number;
}

interface IRelatedElements {
  [details: string]: IRelatedElement;
}

interface IElementDefinition {
  type: string;
  text: string;
  description?: string;
  options?: IElementDefinition[];
  related?: IRelatedElements;
}

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

interface IWorldDefinition {
  definitions: IElementDefinition[];
  alias: IAliasDefinition;
  existing: IElement[];
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

interface ITable {
  type: string;
  options?: IElementDefinition[];
  related?: IRelatedElements;
}

interface ITableLocator {
  locale: string;
  ns: string;
  type: string;
}

interface IConnectorOptions {
  rootPath: string;
}

export {
  ERandomOption,
  IElementDefinition,
  IWorldDefinition,
  ISearchDefinition,
  IRelatedElement,
  IRelatedElements,
  IElement,
  IAliasDefinition,
  ILocalizeOptions,
  IPersistanceSave,
  ITable,
  ITableLocator,
  IConnectorOptions,
};
