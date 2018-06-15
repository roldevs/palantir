/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import related from '../../src/related';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IRelatedElement,
  IRelatedElements,
  IWorldDefinition,
} from '../../src/typings';

describe('Related#get related', () => {
  describe('without alias', () => {
    const aliasDefinition: IAliasDefinition = {};
    const guid: string = uuidv1();
    describe('related', () => {
      const definitions: IElementDefinition[] = [{
        type: 'npc',
        text: 'npc',
        related: {
          item1: {
            search: [{
              type: 'item1',
            }],
          },
          item2: {
            search: [{
              type: 'item2',
              random: ERandomOption.exists,
            }],
          },
        },
      }, {
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
        type: 'item1', guid: uuidv1(),
      }, {
        type: 'item1', guid: uuidv1(),
      }, {
        type: 'item2', guid,
      }, {
        type: 'item3', guid: uuidv1(),
      }];
      const service = related(aliasDefinition, definitions, existing);

      it('get related only element', () => {
        const subject: IElementDefinition = service.get([{type: 'npc'}]);

        expect(subject.related).to.not.be.undefined;

        const result1: IElement | IElementDefinition = subject.related!.item1.result!;
        const result2: any = subject.related!.item2.result!;

        expect(result1).to.not.be.undefined;
        expect(result1.type).to.eql('item1');
        expect(result1.text).to.be.oneOf(['item_1_1', 'item_1_2']);
        expect(result2).to.not.be.undefined;
        expect(result2.type).to.eql('item2');
        expect(result2.guid).to.eql(guid);
      });
    });
  });
});
