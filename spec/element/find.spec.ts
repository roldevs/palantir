/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import element from '../../lib/element';
import {
  IElement,
  IElementDefinition,
} from '../../lib/typings';

describe('Element#find', () => {
  const guid1: string = uuidv1();
  const existing1: IElement = { type: 'item1', guid: guid1, text: 'item1' };
  const item1: IElementDefinition = {
    type: 'item1',
    text: 'item1',
    options: [{
      type: 'item1',
      text: 'item_1_1',
    }, {
      type: 'item1',
      text: 'item_1_2',
    }],
  };
  it('find by type return expected element', () => {
    expect(element([item1], [existing1]).find('item1')).to.eql(item1);
  });
  it('find by guid return expected element', () => {
    expect(element([item1], [existing1]).find(guid1)).to.eql(existing1);
  });
  it('return undefined if cannot find', () => {
    expect(element([item1], [existing1]).find('item2')).to.be.undefined;
  });
});
