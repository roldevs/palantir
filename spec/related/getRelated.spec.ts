/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import related from '../../lib/related';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
} from '../../lib/typings';

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
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid, text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related(aliasDefinition, definitions, existing);

      it('get related only element', () => {
        const subject: IElementDefinition = service.getOne([{type: 'npc'}]);

        expect(subject.related).to.not.be.undefined;

        const result1: Array<IElementDefinition | IElement> = subject.related!.item1.results!;
        const result2: any = subject.related!.item2.results!;

        expect(result1[0]).to.not.be.undefined;
        expect(result1[0].type).to.eql('item1');
        expect(result1[0].text).to.be.oneOf(['item_1_1', 'item_1_2']);
        expect(result2[0]).to.not.be.undefined;
        expect(result2[0].type).to.eql('item2');
        expect(result2[0].guid).to.eql(guid);
      });
    });
  });
});
