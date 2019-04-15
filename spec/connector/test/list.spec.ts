/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import testConnector from '../../../src/lib/connectors/test';

describe('TestConnector#list', () => {
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

  it('list specified SearchDefinitions', (done) => {
    connector.list().then((locators) => {
      const expected = [{
        locale: 'es',
        ns: 'ns1',
        type: 'item1',
      }, {
        locale: 'es',
        ns: 'ns1',
        type: 'item2',
      }, {
        locale: 'es',
        ns: 'ns2',
        type: 'item1',
      }, {
        locale: 'es',
        ns: 'ns2',
        type: 'item2',
      }];

      expect(R.map(R.prop('locale'), locators)).to.have.members(['es', 'es', 'es', 'es']);
      expect(R.map(R.prop('ns'), locators)).to.have.members(['ns1', 'ns1', 'ns2', 'ns2']);
      expect(R.map(R.prop('type'), locators)).to.have.members(['item1', 'item2', 'item1', 'item2']);
      expect(locators.length).to.eql(expected.length);
      done();
    });
  });
});
