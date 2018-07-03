import * as R from 'ramda';
import aliasCreator from './alias';
import elementCreator from './element';
import optionsCreator from './options';
import {
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IRelatedElement,
  IRelatedElements,
} from './typings';

const related: (
  aliasDefinitions: IAliasDefinition,
  definitions: IElementDefinition[],
  existing: IElement[],
) => {
  get: (relatedList: IRelatedDefinition[]) => any,
  fillRelated: (relatedElements: IRelatedElements) => IRelatedElements,
} =
(aliasDefinitions, definitions, existing) => {
  const alias = aliasCreator(aliasDefinitions);
  const options = optionsCreator(definitions, existing);
  const element = elementCreator(definitions, existing);

  const setResponse: (item: IRelatedElement) => IRelatedElement =
  (item) => R.set(R.lensProp('result'), get(item.search), item);

  const fillRelated: (relatedElements: any) => any =
  R.map<IRelatedElement, IRelatedElement>(setResponse);

  const get: (relatedList: IRelatedDefinition[]) => any =
  (relatedList) => {
    relatedList = alias.toRelated(relatedList);
    const optionList: Array<IElementDefinition | IElement> = options.fromRelatedList(relatedList);
    let elementFound: IElement | IElementDefinition | undefined;

    if (!R.isEmpty(optionList)) {
      elementFound = optionList[Math.floor(Math.random() * optionList.length)];
    } else {
      const firstRelated: IRelatedDefinition | undefined = R.head(relatedList);
      elementFound = element.find(firstRelated!.type);
    }

    if (elementFound && elementFound!.related) {
      return R.set(
        R.lensProp('related'),
        fillRelated(elementFound!.related),
        elementFound,
      );
    }
    return elementFound;
  };

  return {
    fillRelated,
    get,
  };
};

export = related;
