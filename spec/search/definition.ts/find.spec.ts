/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import testConnector from '../../../src/lib/connectors/test';
import metaTestModule from '../../../src/lib/meta/test';
import testRepository from '../../../src/lib/repository/memory';
import searchModule from '../../../src/lib/search/definition';
import {
  IElement,
  IElementDefinition,
  IMetaFactory,
  ISearchDefinition,
  ISearchResult,
} from '../../../src/lib/typings';

describe('Search::definition#find', () => {
  const meta: IMetaFactory = metaTestModule();

  const repository = testRepository({
    locale: 'es',
    elements: {},
  });

  const connector = testConnector({
    elements: {
      es: {
        ns1: {
          item1: {
            data: {
              text: 'ns1.item1',
            },
          },
          item2: {
            data: {
              text: 'ns1.item2',
            },
          },
        },
        ns2: {
          item1: {
            data: {
              text: 'ns2.item1',
            },
          },
          item2: {
            data: {
              text: 'ns2.item2',
            },
          },
        },
      },
      en: {},
    },
  });

  describe('with es locale', () => {
    const search = searchModule({
      connector,
      repository,
      meta,
    });

    describe('with one element search', () => {
      it('return the ns1:item2', (done) => {
        const searchDef: ISearchDefinition = {
          locale: 'es',
          ns: 'ns1',
          type: 'item2',
        };

        search.find(searchDef).then((data: ISearchResult) => {
          const element: IElement | IElementDefinition = R.nth(0, data)!;
          expect(element).to.not.be.null;
          expect(element!.text).to.eql('ns1.item2');
          done();
        });
      });

      it('return the ns2:item1', (done) => {
        const searchDef: ISearchDefinition = {
          locale: 'es',
          ns: 'ns2',
          type: 'item1',
        };

        search.find(searchDef).then((data: ISearchResult) => {
          const element: IElement | IElementDefinition = R.nth(0, data)!;
          expect(element).to.not.be.null;
          expect(element!.text).to.eql('ns2.item1');
          done();
        });
      });

      it('bad ns should return empty array', (done) => {
        const searchDef: ISearchDefinition = {
          locale: 'es',
          ns: 'ns3',
          type: 'item1',
        };

        search.find(searchDef).then((data: ISearchResult) => {
          expect(data).to.be.empty;
          done();
        });
      });

      it('bad item should return empty array', (done) => {
        const searchDef: ISearchDefinition = {
          locale: 'es',
          ns: 'ns1',
          type: 'item4',
        };

        search.find(searchDef).then((data: ISearchResult) => {
          expect(data).to.be.empty;
          done();
        });
      });
    });
  });

  describe('with en locale', () => {
    const search = searchModule({
      connector,
      repository,
      meta,
    });
    it('should return empty array', (done) => {
      const searchDef: ISearchDefinition = {
        locale: 'es',
        ns: 'ns1',
        type: 'item3',
      };

      search.find(searchDef).then((data: ISearchResult) => {
        expect(data).to.be.empty;
        done();
      });
    });
  });
});
