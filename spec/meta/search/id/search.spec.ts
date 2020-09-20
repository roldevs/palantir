/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import metaIdModule from '../../../../src/lib/meta/search/id';
import {
  IMetaDefinition,
  ISearchDefinition,
} from '../../../../src/lib/typings';

describe('MetaId#get', () => {
  const metaId = metaIdModule({
    ids: {
      test: {
        locale: 'es',
        ns: 'ns1',
        type: 'type1',
      },
    },
    categories: {},
    directory: [],
  });

  it('id 1 return es/ns1/type1', () => {
    const searchDef: ISearchDefinition[] = metaId.search('test');
    expect(searchDef).to.not.be.empty;
    expect(searchDef[0].locale).to.eql('es');
    expect(searchDef[0].ns).to.eql('ns1');
    expect(searchDef[0].type).to.eql('type1');
  });

  it('unexisting id return empty search definition', () => {
    const searchDef: ISearchDefinition[] = metaId.search('other');
    expect(searchDef).to.be.empty;
  });
});
