/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import distributeModule from '../../src/lib/distribute';

describe('Distribute#get', () => {
  describe('with different weights', () => {
    const distribution = distributeModule([{
      text: 'Just once',
    }, {
      text: 'Twice',
      weight: 2,
    }, {
      text: 'Three times',
      weight: 3,
    }]);
    it('should return distributed array accordingly', () => {
      expect(distribution.get()).be.eql([{
        text: 'Just once',
      }, {
        text: 'Twice',
        weight: 2,
      }, {
        text: 'Twice',
        weight: 2,
      }, {
        text: 'Three times',
        weight: 3,
      }, {
        text: 'Three times',
        weight: 3,
      }, {
        text: 'Three times',
        weight: 3,
     }]);
    });
  });
});
