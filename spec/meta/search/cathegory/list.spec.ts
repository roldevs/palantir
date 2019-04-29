/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../../../src/lib/connectors/test';
import metaCathegoryModule from '../../../../src/lib/meta/search/cathegory';
import {
  IMetaDefinition,
} from '../../../../src/lib/typings';

describe('MetaCathegoryModule#list', () => {
  const connector = testConnector({
    elements: {
      es: {},
      en: {},
    },
  });

  const definition: IMetaDefinition = {
    ids: { },
    categories: {
      cat1: [],
      cat2: [],
    },
  };

  const metaCathegory = metaCathegoryModule({ definition });

  it('list returns three cathegories (cat1, cat2)', (done) => {
    metaCathegory.list().then((results: Array<string | number>) => {
      expect(results).to.eql(['cat1', 'cat2']);
      done();
    });
  });
});
