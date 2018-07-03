import { expect } from 'chai';
import { IElement, IElementDefinition } from '../lib/typings';

const expectElementEqualDef: (element: IElement, definition: IElementDefinition) => void =
(element, definition) => {
  expect(element.type).to.eql(definition.type);
  expect(element.text).to.eql(definition.text);
};

export {
  expectElementEqualDef,
};
