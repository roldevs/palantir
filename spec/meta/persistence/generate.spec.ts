/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../../src/lib/connectors/test';
import metaModule from '../../../src/lib/meta/persistence';
import {
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';

describe('MetaPersistence#generate', () => {
  const connector = testConnector({
    elements: {
      es: {
        ns1: {
          type1: {
            meta: {
              system: 'Test',
              id: 'test',
            },
            data: {
              text: 'A test item',
            },
          },
        },
      },
      en: {},
    },
  });
  const meta = metaModule({
    connector,
    metaFilePath: 'meta.yml',
  });

  it('id 1 is for es/ns1/type1', () => {
    meta.generate().then((definition: IMetaDefinition) => {
      expect(definition.ids.test).to.not.be.undefined.and.not.be.null;

      const search: ISearchDefinition = definition.ids.test;
      expect(search.locale).to.eql('es');
      expect(search.ns).to.eql('ns1');
      expect(search.type).to.eql('type1');
    });
  });
});
