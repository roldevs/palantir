/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import memoryRepository from '../../../lib/repository/memory';
import {
  ERandomOption,
  IElement,
  IOptionalElement,
  ISearchDefinition,
} from '../../../lib/typings';
import { getUUID } from '../../../lib/utils';

describe('Repository::Memory#search', () => {
  describe('with repository empty', () => {
    const repository = memoryRepository({
      locale: 'es',
      elements: {},
    });
    const search: ISearchDefinition = {
      ns: 'ns',
      type: 'items1',
      random: ERandomOption.existing,
    };
    it('return null', (done) => {
      repository.search(search).then((data: IElement[]) => {
        expect(data).to.be.empty;
        done();
      });
    });
  });
  describe('with repository empty', () => {
    const repository = memoryRepository({
      locale: 'es',
      elements: {
        es: [{
          ns: 'ns1',
          type: 'item1',
          guid: getUUID(),
          text: 'Item11_1',
        }, {
          ns: 'ns1',
          type: 'item1',
          guid: getUUID(),
          text: 'Item11_2',
        }, {
          ns: 'ns2',
          type: 'item1',
          guid: getUUID(),
          text: 'Item21_1',
        }, {
          ns: 'ns2',
          type: 'item2',
          guid: getUUID(),
          text: 'Item22_1',
        }],
      },
    });
    const search: ISearchDefinition = {
      ns: 'ns1',
      type: 'item1',
      random: ERandomOption.existing,
    };
    it('return both elements', (done) => {
      repository.search(search).then((data: IElement[]) => {
        R.forEach((element: IElement) => {
          expect(element).to.not.be.null;
          expect(element.guid).to.not.be.null;
          expect(element.ns).to.eql('ns1');
          expect(element.type).to.eql('item1');
          expect(element.text).to.be.oneOf(['Item11_1', 'Item11_2']);
        }, data);
        done();
      });
    });
  });
});
