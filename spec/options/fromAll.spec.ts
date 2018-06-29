/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import options from '../../src/options';
import {
  IElement,
  IElementDefinition,
} from '../../src/typings';

describe('Options#fromAll', () => {
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
      const existing1: IElement = { type: 'item1', guid: uuidv1(), text: 'item1_1' };
      const existing2: IElement = { type: 'item1', guid: uuidv1(), text: 'item1_2' };
      const existing3: IElement = { type: 'item2', guid: uuidv1(), text: 'item2_1' };
      const existing4: IElement = { type: 'item1', guid: uuidv1(), text: 'item1_3' };

      const subject: Array<IElement | IElementDefinition> = options(
        [
          item1,
          item2,
        ], [
          existing1,
          existing2,
          existing3,
          existing4,
        ],
      ).fromAll('item1');
      const expected: Array<IElement | IElementDefinition> = R.concat<IElement | IElementDefinition>(
        [existing1, existing2, existing4],
        item1.options as IElementDefinition[],
      );
      expect(subject).to.have.members(expected);
    });
  });
  describe('without type', () => {
    it('returns empty array', () => {
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
      const existing1: IElement = { type: 'item1', guid: uuidv1(), text: 'item1_1' };
      const existing2: IElement = { type: 'item1', guid: uuidv1(), text: 'item1_2' };

      const definitions: IElementDefinition[] = [item1];
      expect(
        options(
          definitions, [
            existing1,
            existing2,
          ],
        ).fromAll('item2'),
      ).to.eql([]);
    });
  });
});
