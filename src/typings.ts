
type uuid = string;

enum ERandomOption {
  random = 'ramdom', // Generate a new Element
  all = 'all', // Choose an existing Element or generate a new one
  exists = 'exists', // Choose only existing Element
}

interface IRelatedDefinition {
  type: string;
  random?: ERandomOption;
}

interface IRelatedElement {
  search: IRelatedDefinition[];
  result?: IElementDefinition; // Here is save the result
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

export {
  ERandomOption,
  IElementDefinition,
  IWorldDefinition,
  IRelatedDefinition,
  IRelatedElement,
  IRelatedElements,
  IElement,
  IAliasDefinition,
  ILocalizeOptions,
  IPersistanceSave,
};
