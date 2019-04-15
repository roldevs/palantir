/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import {
} from '../../../src/lib/meta/processor';
import metaProcessorId from '../../../src/lib/meta/processors/id';
import {
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';

describe('MetaProcessorId#process', () => {
  describe('process first meta', () => {
    it('should add id', () => {
      const processor = metaProcessorId({ ids: {}, categories: {} });
      const locator: ISearchDefinition = {
        locale: 'locale',
        ns: 'ns',
        type: 'type',
      };
      const header = {
        system: 'test',
        id: '1',
      };
      const definition = processor.process(header, locator);
      expect(definition.ids['1']).to.eql(locator);
    });
  });
  describe('process add meta', () => {
    it('should add id', () => {
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
      const meta: IMetaDefinition = { ids: {}, categories: {} };
      meta.ids['1'] = locator1;
      const processor = metaProcessorId(meta);
      const header = {
        system: 'test',
        id: '2',
      };
      const definition = processor.process(header, locator2);
      expect(definition.ids['1']).to.eql(locator1);
      expect(definition.ids['2']).to.eql(locator2);
    });
  });
});
