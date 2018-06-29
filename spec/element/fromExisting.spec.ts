/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import element from '../../src/element';
import {
  IElement,
} from '../../src/typings';

describe('Element#fromExisting', () => {
  const guid1: string = uuidv1();
  const existing1: IElement = { type: 'item1', guid: guid1, text: 'item1' };
  describe('with guid', () => {
    it('return expected element', () => {
      expect(element([], [existing1]).fromExisting(guid1)).to.eql(existing1);
    });
  });
  describe('without guid', () => {
    it('return undefined', () => {
      expect(element([], [existing1]).fromExisting(uuidv1())).to.be.undefined;
    });
  });
});
