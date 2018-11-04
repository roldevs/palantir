/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import counterModule from '../../src/lib/counter';

describe('Counter#getCounter', () => {
  describe('with undefined/null', () => {
    const counter = counterModule(null);
    it('should return 1', () => {
      expect(counter.get()).be.eql(1);
    });
  });

  describe('with a value', () => {
    const counter = counterModule(3);
    it('should return the value', () => {
      expect(counter.get()).be.eql(3);
    });
  });

  describe('with a dice definition', () => {
    const counter = counterModule('1d6+1');
    it('should return a roll value', () => {
      expect(counter.get()).be.oneOf([2, 3, 4, 5, 6, 7]);
    });
  });
});
