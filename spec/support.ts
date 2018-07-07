import { expect } from 'chai';
import { IElement, IElementDefinition } from '../lib/typings';

const expectElementEqualDef: (element: IElement, definition: IElementDefinition) => void =
(element, definition) => {
  expect(element.type).to.eql(definition.type);
  expect(element.text).to.eql(definition.text);
};

/* tslint:disable no-console */
const debugObject: (obj: any) => void = (obj: any) => console.log(JSON.stringify(obj, null, 2));
/* tslint:enable no-console */

export {
  expectElementEqualDef,
  debugObject,
};
