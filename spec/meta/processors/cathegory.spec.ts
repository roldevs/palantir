/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import metaProcessorCategory from '../../../src/lib/meta/processors/category';
import {
  IMeta,
  IMetaDefinition,
  ISearchDefinition,
} from '../../../src/lib/typings';
import testConnector from '../../../src/lib/connectors/test';

describe('metaProcessorCategory#process', () => {
  describe('process first meta', () => {
    it('should add category', () => {
      const connector = testConnector({ elements: {} });
      const processor = metaProcessorCategory({ ids: {}, categories: {}, directory: [] });
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
      processor.process(header, locator, connector).then((definition: IMetaDefinition) => {
        expect(definition.categories.page1).to.eql([locator]);
        expect(definition.categories.page2).to.eql([locator]);
      });
    });
  });
  describe('process two metas', () => {
    it('should add categories', () => {
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
      metaProcessorCategory(meta).process(header1, locator1, connector).then(
        (definition1: IMetaDefinition) => {
          metaProcessorCategory(definition1).process(header2, locator2, connector).then(
          (definition2: IMetaDefinition) => {
            expect(definition2.categories.page1).to.eql([locator1]);
            expect(definition2.categories.page2).to.eql([locator1, locator2]);
            expect(definition2.categories.page3).to.eql([locator2]);
          });
      });
    });
  });
});
