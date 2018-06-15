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

describe('Related#get simple', () => {
  describe('without alias', () => {
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
      type: 'item1', guid: uuidv1(),
    }, {
      type: 'item1', guid: uuidv1(),
    }, {
      type: 'item2', guid: uuidv1(),
    }, {
      type: 'item3', guid: uuidv1(),
    }];
    const service = related(aliasDefinition, definitions, existing);

    it('returns a random defined element', () => {
      const subject: IElementDefinition = service.get([{type: 'item1'}]);
      expect(subject.type).to.eql('item1');
      expect(subject.text).to.be.oneOf(['item_1_1', 'item_1_2']);
    });

    it('returns an existing defined element', () => {
      const subject: IElement = service.get([{type: 'item1', random: ERandomOption.exists}]);
      expect(subject.type).to.eql('item1');
      expect(subject.guid).to.be.oneOf([existing[0].guid, existing[1].guid]);
    });
  });
});
