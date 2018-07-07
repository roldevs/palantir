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
  get: (relatedElement: IRelatedElement) => IRelatedElement,
  getOne: (relatedList: IRelatedDefinition[]) => any,
  fillRelated: (relatedElements: IRelatedElements) => IRelatedElements,
} =
(aliasDefinitions, definitions, existing) => {
  const alias = aliasCreator(aliasDefinitions);
  const options = optionsCreator(definitions, existing);
  const element = elementCreator(definitions, existing);

  const get: (relatedElement: IRelatedElement) => IRelatedElement =
  (relatedElement) => {
    return R.merge(relatedElement, {
      results: R.times(() => getOne(relatedElement.search), optionCount(relatedElement)),
    });
  };

  const fillRelated: (relatedElements: any) => any =
  R.map<IRelatedElement, IRelatedElement>(get);

  const optionCount: (relatedElement: IRelatedElement) => any =
  R.compose(R.defaultTo(1), R.view(R.lensProp('count')));

  const getOne: (relatedList: IRelatedDefinition[]) => IElementDefinition | IElement | undefined =
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
    getOne,
    get,
  };
};

export = related;
