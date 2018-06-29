/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import options from '../../src/options';
import {
  IElementDefinition,
} from '../../src/typings';

describe('Options#fromDefinition', () => {
  describe('with type', () => {
    it('return expected options', () => {
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
      const item2: IElementDefinition = {
        type: 'item2',
        text: 'item2',
        options: [{
          type: 'item2',
          text: 'item_2_1',
        }, {
          type: 'item2',
          text: 'item_2_2',
        }],
      };
      const definitions: IElementDefinition[] = [item1, item2];
      expect(options(definitions, []).fromDefinition('item1')).to.eql(item1.options);
    });
  });
  describe('without options', () => {
    it('return expected options', () => {
      const item1: IElementDefinition = {
        type: 'item1',
        text: 'item1',
      };
      const definitions: IElementDefinition[] = [item1];
      expect(options(definitions, []).fromDefinition('item1')).to.eql([]);
    });
  });
  describe('without type', () => {
    it('returns empty array', () => {
      const item1: IElementDefinition = {
        type: 'item1',
        text: 'item2',
        options: [{
          type: 'item1',
          text: 'item_1_1',
        }, {
          type: 'item1',
          text: 'item_1_2',
        }],
      };
      const definitions: IElementDefinition[] = [item1];
      expect(options(definitions, []).fromDefinition('item2')).to.eql([]);
    });
  });
});
