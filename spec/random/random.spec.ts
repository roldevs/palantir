/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import testConnector from '../../lib/connectors/test';
import randomModule from '../../lib/random';
import testRepository from '../../lib/repository/memory';
import {
  IOptionalElement,
  IOptionalElementDefinition,
  ISearchDefinition,
} from '../../lib/typings';

describe('Random#random', () => {
  const repository = testRepository({
    locale: 'es',
    elements: {},
  });

  const connector = testConnector({
    elements: {
      es: {
        ns1: {
          item1: {
            text: 'ns1.item1',
          },
          item2: {
            text: 'ns1.item2',
          },
        },
        ns2: {
          item1: {
            text: 'ns2.item1',
          },
          item2: {
            text: 'ns2.item2',
          },
        },
      },
      en: {},
    },
  });

  describe('with es locale', () => {
    const random = randomModule({
      locale: 'es',
      connector,
      repository,
    });

    describe('with one element search', () => {
      it('return the ns1:item2', (done) => {
        const searchDef: ISearchDefinition[] = [{
          ns: 'ns1',
          type: 'item2',
        }];

        random.random(searchDef).then((data: IOptionalElement | IOptionalElementDefinition) => {
          expect(data).to.not.be.null;
          expect(data!.text).to.eql('ns1.item2');
          done();
        });
      });

      it('return the ns2:item1', (done) => {
        const searchDef: ISearchDefinition[] = [{
          ns: 'ns2',
          type: 'item1',
        }];

        random.random(searchDef).then((data: IOptionalElement | IOptionalElementDefinition) => {
          expect(data).to.not.be.null;
          expect(data!.text).to.eql('ns2.item1');
          done();
        });
      });

      it('bad ns should return empty array', (done) => {
        const searchDef: ISearchDefinition[] = [{
          ns: 'ns3',
          type: 'item1',
        }];

        random.random(searchDef).then((data: IOptionalElement | IOptionalElementDefinition) => {
          expect(data).to.be.null;
          done();
        });
      });

      it('bad item should return empty array', (done) => {
        const searchDef: ISearchDefinition[] = [{
          ns: 'ns1',
          type: 'item4',
        }];

        random.random(searchDef).then((data: IOptionalElement | IOptionalElementDefinition) => {
          expect(data).to.be.null;
          done();
        });
      });
    });

    describe('with two element search', () => {
      it('return the ns1:item2 or ns2.item1', (done) => {
        const searchDef: ISearchDefinition[] = [{
          ns: 'ns1',
          type: 'item2',
        }, {
          ns: 'ns2',
          type: 'item1',
        }];

        random.random(searchDef).then((element: IOptionalElement | IOptionalElementDefinition) => {
          expect(element).to.not.be.null;
          expect(element!.text).to.oneOf(['ns1.item2', 'ns2.item1']);
          done();
        });
      });

      describe('with one unexistant element', () => {
        it('return the ns1:item2', (done) => {
          const searchDef: ISearchDefinition[] = [{
            ns: 'ns1',
            type: 'item2',
          }, {
            ns: 'ns1',
            type: 'item4',
          }];

          random.random(searchDef).then((element: IOptionalElement | IOptionalElementDefinition) => {
            expect(element).to.not.be.null;
            expect(element!.text).to.eql('ns1.item2');
            done();
          });
        });
      });
    });
  });
});
