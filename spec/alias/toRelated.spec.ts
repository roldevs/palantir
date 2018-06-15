/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import alias from '../../src/alias';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from '../../src/typings';

describe('Alias#toRelated', () => {
  describe('without alias', () => {
    const aliasDefinition: IAliasDefinition = {};

    it('should return the same related element', () => {
      const related: IRelatedDefinition[] = [{
        type: 'item1',
      }, {
        type: 'item2',
      }];

      expect(alias(aliasDefinition).toRelated(related)).to.eql(related);
    });
  });

  describe('with alias', () => {
    describe('only one type', () => {
      const aliasDefinition: IAliasDefinition = {
        item: ['item1', 'item2'],
      };

      it('should return the same related element', () => {
        const expected: IRelatedDefinition[] = [{
          type: 'item1',
        }, {
          type: 'item2',
        }];

        expect(alias(aliasDefinition).toRelated([{
          type: 'item',
        }])).to.eql(expected);
      });
    });

    describe('several types', () => {
      const aliasDefinition: IAliasDefinition = {
        item1: ['item11', 'item12'],
        item2: ['item21', 'item22'],
      };

      it('should return the same related element', () => {
        const expected: IRelatedDefinition[] = [{
          type: 'item11',
        }, {
          type: 'item12',
        }, {
          type: 'item21',
        }, {
          type: 'item22',
        }];

        expect(alias(aliasDefinition).toRelated([{
          type: 'item1',
        }, {
          type: 'item2',
        }])).to.eql(expected);
      });
    });
  });
});
