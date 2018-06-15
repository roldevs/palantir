/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import element from '../../src/element';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from '../../src/typings';

describe('Element#fromDefinitions', () => {
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
  describe('with type', () => {
    it('return expected element', () => {
      expect(element([item1], []).fromDefinitions('item1')).to.eql(item1);
    });
  });
  describe('without type', () => {
    it('return undefined', () => {
      expect(element([item1], []).fromDefinitions('item2')).to.be.undefined;
    });
  });
});
