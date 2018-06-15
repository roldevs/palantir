/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import options from '../../src/options';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from '../../src/typings';

describe('Options#fromExisting', () => {
  describe('with type', () => {
    it('return expected options', () => {
      const existing1: IElement = { type: 'item1', guid: uuidv1() };
      const existing2: IElement = { type: 'item1', guid: uuidv1() };
      const existing3: IElement = { type: 'item2', guid: uuidv1() };
      const existing4: IElement = { type: 'item1', guid: uuidv1() };
      expect(
        options(
          [],
          [existing1, existing2, existing3, existing4],
        ).fromExisting('item1'),
      ).to.eql([existing1, existing2, existing4]);
    });
  });
  describe('without type', () => {
    it('trhow an error', () => {
      const existing1: IElement = { type: 'item1', guid: uuidv1() };
      const existing2: IElement = { type: 'item1', guid: uuidv1() };
      expect(
        options(
          [],
          [existing1, existing2],
        ).fromExisting('item2'),
      ).to.eql([]);
    });
  });
});
