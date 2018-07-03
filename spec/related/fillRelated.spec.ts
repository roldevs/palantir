/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import related from '../../lib/related';
import {
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedElements,
} from '../../lib/typings';

describe('Related#fillRelated', () => {
  describe('related', () => {
    const aliasDefinition: IAliasDefinition = {};
    const definitions: IElementDefinition[] = [{
      type: 'item1',
      text: 'item1',
      options: [{
        type: 'item1',
        text: 'item_1_1',
      }, {
        type: 'item1',
        text: 'item_1_2',
      }],
    }, {
      type: 'item2',
      text: 'item2',
      options: [{
        type: 'item2',
        text: 'item_2_1',
      }, {
        type: 'item2',
        text: 'item_2_2',
      }],
    }];
    const existing: IElement[] = [{
      type: 'item1', guid: uuidv1(), text: 'item1_1',
    }, {
      type: 'item1', guid: uuidv1(), text: 'item1_2',
    }, {
      type: 'item2', guid: uuidv1(), text: 'item2_1',
    }, {
      type: 'item3', guid: uuidv1(), text: 'item1_3',
    }];
    const service = related(aliasDefinition, definitions, existing);

    it('related returns from definition', () => {
      const subject: IRelatedElements = service.fillRelated({
        item1: {
          search: [{
            type: 'item1',
          }],
        },
        item2: {
          search: [{
            type: 'item2',
          }],
        },
      });

      expect(subject).to.not.be.undefined;

      const result1: IElementDefinition = subject.item1.result!;
      const result2: IElementDefinition = subject.item2.result!;

      expect(result1).to.not.be.undefined;
      expect(result1.type).to.eql('item1');
      expect(result1.text).to.be.oneOf(['item_1_1', 'item_1_2']);
      expect(result2).to.not.be.undefined;
      expect(result2.type).to.eql('item2');
      expect(result2.text).to.be.oneOf(['item_2_1', 'item_2_2']);
    });
  });
});
