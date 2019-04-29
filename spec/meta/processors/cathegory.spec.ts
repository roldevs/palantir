/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import metaProcessorCategory from '../../../src/lib/meta/processors/category';
import {
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';

describe('metaProcessorCategory#process', () => {
  describe('process first meta', () => {
    it('should add category', () => {
      const processor = metaProcessorCategory({ ids: {}, categories: {} });
      const locator: ISearchDefinition = {
        locale: 'locale',
        ns: 'ns',
        type: 'type',
      };
      const header = {
        system: 'test',
        categories: [
          'page1',
          'page2',
        ],
      };
      const definition = processor.process(header, locator);
      expect(definition.categories.page1).to.eql([locator]);
      expect(definition.categories.page2).to.eql([locator]);
    });
  });
  describe('process two metas', () => {
    it('should add categories', () => {
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
      const header1 = {
        system: 'test',
        categories: [
          'page1',
          'page2',
        ],
      };
      const header2 = {
        system: 'test',
        categories: [
          'page2',
          'page3',
        ],
      };
      let definition = metaProcessorCategory(meta).process(header1, locator1);
      definition = metaProcessorCategory(definition).process(header2, locator2);
      expect(definition.categories.page1).to.eql([locator1]);
      expect(definition.categories.page2).to.eql([locator1, locator2]);
      expect(definition.categories.page3).to.eql([locator2]);
    });
  });
});
