/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import options from '../../lib/options';
import {
  ERandomOption,
  IElement,
  IElementDefinition,
} from '../../lib/typings';

describe('Options#fromRelatedList', () => {
  describe('with type', () => {
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

    it('with random option', () => {
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
      ).fromRelatedList([{
        type: 'item1',
        random: ERandomOption.random,
      }]);
      const expected: Array<IElement | IElementDefinition> = item1.options as IElementDefinition[];
      expect(subject).to.have.members(expected);
    });
    it('with exists option', () => {
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
      ).fromRelatedList([{
        type: 'item1',
        random: ERandomOption.exists,
      }]);
      const expected: Array<IElement | IElementDefinition> = [existing1, existing2, existing4];
      expect(subject).to.have.members(expected);
    });
    it('with all option', () => {
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
      ).fromRelatedList([{
        type: 'item1',
        random: ERandomOption.all,
      }]);
      const expected: Array<IElement | IElementDefinition> = R.concat<IElement | IElementDefinition>(
        [existing1, existing2, existing4],
        item1.options as IElementDefinition[],
      );
      expect(subject).to.have.members(expected);
    });
    it('with two related', () => {
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
      ).fromRelatedList([{
        type: 'item1',
        random: ERandomOption.random,
      }, {
        type: 'item2',
        random: ERandomOption.exists,
      }]);
      const expected: Array<IElement | IElementDefinition> = R.concat<IElement | IElementDefinition>(
        [existing3],
        item1.options as IElementDefinition[],
      );
      expect(subject).to.have.members(expected);
    });
  });
  describe('without type', () => {
    it('throw an error', () => {
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
        ).fromRelatedList.bind([{
          type: 'item1',
          random: ERandomOption.exists,
        }, {
          type: 'item5', // ERROR
          random: ERandomOption.random,
        }]),
      ).to.throw(TypeError);
    });

    it('without existing', () => {
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
      const subject = options(
        definitions, [
          existing1,
          existing2,
        ],
      ).fromRelatedList([{
        type: 'item5',
        random: ERandomOption.exists,
      }, {
        type: 'item1',
        random: ERandomOption.random,
      }]);
      const expected: Array<IElement | IElementDefinition> = item1.options as IElementDefinition[];
      expect(subject).to.have.members(expected);
    });
  });
});
