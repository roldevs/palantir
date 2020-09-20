/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import {
} from '../../../src/lib/meta/processor';
import metaProcessorId from '../../../src/lib/meta/processors/id';
import {
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';
import testConnector from '../../../src/lib/connectors/test';

describe('MetaProcessorId#process', () => {
  describe('process first meta', () => {
    it('should add id', () => {
      const connector = testConnector({ elements: {} });
      const processor = metaProcessorId({ ids: {}, categories: {}, directory: [] });
      const locator: ISearchDefinition = {
        locale: 'locale',
        ns: 'ns',
        type: 'type',
      };
      const header = {
        system: 'test',
        id: '1',
      };
      processor.process(header, locator, connector).then((definition: IMetaDefinition) => {
        expect(definition.ids['1']).to.eql(locator);
      });
    });
  });
  describe('process add meta', () => {
    it('should add id', () => {
      const connector = testConnector({ elements: {} });
      const locator1: ISearchDefinition = {
        locale: 'locale1',
        ns: 'ns1',
        type: 'type1',
      };
      const locator2: ISearchDefinition = {
        locale: 'locale2',
        ns: 'ns2',
        type: 'type2',
      };
      const meta: IMetaDefinition = { ids: {}, categories: {}, directory: [] };
      meta.ids['1'] = locator1;
      const processor = metaProcessorId(meta);
      const header = {
        system: 'test',
        id: '2',
      };
      processor.process(header, locator2, connector).then((definition: IMetaDefinition) => {
        expect(definition.ids['1']).to.eql(locator1);
        expect(definition.ids['2']).to.eql(locator2);
      });
    });
  });
});
