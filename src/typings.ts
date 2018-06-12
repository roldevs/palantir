
enum ERandomOption {
  random = 'ramdom', // Generate a new Element
  all = 'all', // Choose an existing Element or generate a new one
  exists = 'exists', // Choose only existing Element
}

interface IRelatedOptions {
  random?: ERandomOption
}

interface IRelatedDefinition {
  type: string;
  options?: IRelatedOptions
}

interface IRelatedElements {
  [details: string] : Array<IRelatedDefinition>;
}

interface IElementDefinition {
  type: string;
  description?: string;
  options?: Array<IElementDefinition>;
  related?: IRelatedElements;
}

interface IElement {
  guid: string;
  type: string;
  description?: string;
  related?: {
    [details: string] : string; // Related to a IElement.GUID
  };
}

interface IWorldDefinition {
  definitions: Array<IElementDefinition>;
  alias: {
    [details: string] : Array<string>;
  }
  existing: Array<IElement>;    
}

export { 
  ERandomOption, 
  IElementDefinition, 
  IWorldDefinition, 
  IRelatedDefinition,
  IRelatedOptions,
  IElement,
};