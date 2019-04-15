/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import metaProcessorCathegory from '../../../src/lib/meta/processors/cathegory';
import {
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';

describe('metaProcessorCathegory#process', () => {
  describe('process first meta', () => {
    it('should add cathegory', () => {
      const processor = metaProcessorCathegory({ ids: {}, categories: {} });
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
      let definition = metaProcessorCathegory(meta).process(header1, locator1);
      definition = metaProcessorCathegory(definition).process(header2, locator2);
      expect(definition.categories.page1).to.eql([locator1]);
      expect(definition.categories.page2).to.eql([locator1, locator2]);
      expect(definition.categories.page3).to.eql([locator2]);
    });
  });
});
