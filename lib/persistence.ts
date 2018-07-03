import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import {
  IElement,
  IElementDefinition,
  IPersistanceSave,
  IRelatedElements,
} from './typings';

const persistence: (existing: IElement[]) => {
  save: (element: IElementDefinition) => IPersistanceSave,
} =
(existing) => {
  const createNewElement: (element: IElementDefinition) => IElement =
  (element) => {
    // Assign a guid to the element
    return {
      type: element.type,
      guid: uuidv1(),
      text: element.text,
    };
  };

  const addElementToExisting: (element: IElement) => IElement[] =
  (element) => {
    existing = R.concat(existing, [element]);
    return existing;
  };

  const save: (element: IElementDefinition) => IPersistanceSave =
  (element) => {
    const newGuid: string = uuidv1();
    let newElement: IElement;

    if (element.related) {
      const rels: IRelatedElements = element.related as IRelatedElements;

      const newRels = R.reduce(function(acc: {}, key: string) {
        if (rels[key].result) {
          return R.set(R.lensPath([key]), save(rels[key].result!).element, acc);
        }
        return acc;
      }, {}, R.keys(element.related) );
      newElement = R.merge(createNewElement(element), {
        related: newRels,
      });
    } else {
      newElement = createNewElement(element);
    }
    return {
      element: newElement,
      existing: addElementToExisting(newElement),
    };
  };

  return { save };
};

export = persistence;
