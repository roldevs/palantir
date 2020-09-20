/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../../../src/lib/connectors/test';
import metaCategoryModule from '../../../../src/lib/meta/search/category';
import {
  IMetaDefinition,
} from '../../../../src/lib/typings';

describe('MetaCategoryModule#list', () => {
  const definition: IMetaDefinition = {
    ids: { },
    categories: {
      cat1: [],
      cat2: [],
    },
    directory: [],
  };

  const metaCategory = metaCategoryModule({ definition });

  it('list returns three categories (cat1, cat2)', (done) => {
    metaCategory.list().then((results: (string | number)[]) => {
      expect(results).to.eql(['cat1', 'cat2']);
      done();
    });
  });
});
