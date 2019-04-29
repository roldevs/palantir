/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import testConnector from '../../../../src/lib/connectors/test';
import metaCathegoryModule from '../../../../src/lib/meta/search/cathegory';
import {
  IMetaCathegoryResult,
  IMetaDefinition,
  ISearchDefinition,
} from '../../../../src/lib/typings';

describe('MetaCathegoryModule#search', () => {
  const connector = testConnector({
    elements: {
      es: {
        ns1: {
          type1: {
            meta: {
              system: 'Test1',
            },
            data: {
              text: 'A test item 1',
            },
          },
        },
        ns2: {
          type2: {
            meta: {
              system: 'Test2',
            },
            data: {
              text: 'A test item 2',
            },
          },
        },
        ns3: {
          type3: {
            meta: {
              system: 'Test3',
            },
            data: {
              text: 'A test item 3',
            },
          },
        },
      },
      en: {
        ns3: {
          type3: {
            meta: {
              system: 'Test3',
            },
            data: {
              text: 'A test item 2',
            },
          },
        },
      },
    },
  });

  const definition: IMetaDefinition = {
    ids: { },
    categories: {
      cat1: [{
        locale: 'es',
        ns: 'ns1',
        type: 'type1',
      }, {
        locale: 'en',
        ns: 'ns3',
        type: 'type3',
      }],
      cat2: [{
        locale: 'es',
        ns: 'ns2',
        type: 'type2',
      }, {
        locale: 'es',
        ns: 'ns3',
        type: 'type3',
      }, {
        locale: 'en',
        ns: 'ns3',
        type: 'type3',
      }],
    },
  };

  const metaCathegory = metaCathegoryModule({ definition });

  it('cat1 returns two systems (ns1, ns3)', (done) => {
    metaCathegory.search('cat1').then((result: IMetaCathegoryResult[]) => {
      let test1result: IMetaCathegoryResult;
      test1result = R.find(R.propEq('ns', 'ns1'), result)!;
      expect(test1result).to.not.be.null;
      expect(test1result.locators).that.have.lengthOf(1);
      expect(test1result.locators[0]).to.eql({
        locale: 'es',
        ns: 'ns1',
        type: 'type1',
      });
      test1result = R.find(R.propEq('ns', 'ns3'), result)!;
      expect(test1result).to.not.be.null;
      expect(test1result.locators).that.have.lengthOf(1);
      expect(test1result.locators[0]).to.eql({
        locale: 'en',
        ns: 'ns3',
        type: 'type3',
      });
      done();
    });
  });
  it('cat2 returns two systems (ns2, ns3)', (done) => {
    metaCathegory.search('cat2').then((result: IMetaCathegoryResult[]) => {
      let test1result: IMetaCathegoryResult;
      test1result = R.find(R.propEq('ns', 'ns2'), result)!;
      expect(test1result).to.not.be.null;
      expect(test1result.locators).that.have.lengthOf(1);
      expect(test1result.locators[0]).to.eql({
        locale: 'es',
        ns: 'ns2',
        type: 'type2',
      });
      test1result = R.find(R.propEq('ns', 'ns3'), result)!;
      expect(test1result).to.not.be.null;
      expect(test1result.locators).that.have.lengthOf(2);
      expect(test1result.locators[0]).to.eql({
        locale: 'es',
        ns: 'ns3',
        type: 'type3',
      });
      expect(test1result.locators[1]).to.eql({
        locale: 'en',
        ns: 'ns3',
        type: 'type3',
      });
      done();
    });
  });
});
