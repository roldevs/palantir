/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import path from 'path';
import * as R from 'ramda';
import localConnector from '../../src/lib/connectors/local';
import elementModule from '../../src/lib/element';
import testRepository from '../../src/lib/repository/memory';
import searchModule from '../../src/lib/search';
import {
  IOptionalElementDefinition,
  ISearchDefinition,
  ISearchResult,
} from '../../src/lib/typings';

describe('Element#get', () => {
  const repository = testRepository({
    locale: 'es',
    elements: {},
  });

  const connector = localConnector({
    rootPath: path.resolve(__dirname, '../../definitions'),
  });
  const element = elementModule({
    connector,
    repository,
  });
  const search = searchModule({
    connector,
    repository,
  });

  describe('no definition', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'ns1',
      type: 'fake',
    }];

    it('search throws rejection', (done) => {
      search.find(s).catch((result: any) => {
        expect(result.code).to.eql('ENOENT');
        expect(result.errno).to.eql(-2);
        done();
      });
    });
  });

  describe('trap', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'maze_rats',
      type: 'trap',
    }];

    it('effect and trigger', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          const effect: any = value!.related!.effect.results![0]!;
          const trigger: any = value!.related!.trigger.results![0]!;

          expect(value).is.not.undefined;
          expect(value!.text).to.eql('Trampa');
          expect(effect).is.not.undefined;
          expect(trigger).is.not.undefined;
          expect(effect.text).is.not.undefined;
          expect(trigger.text).is.not.undefined;
          done();
        });
      }).catch(done);
    });
  });
  describe('pc', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'maze_rats',
      type: 'pc',
    }];

    it('appearance, physical, clothes, etc', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          R.forEach((key: any) => {
            const related: any = value!.related![key]!.results![0]!;
            expect(related).is.not.undefined;
            expect(related.text).is.not.undefined;
          }, R.keys(value!.related!));
          done();
        });
      }).catch(done);
    });
  });
  describe('npc_underworld', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'maze_rats',
      type: 'npc_underworld',
    }];

    it('fills related', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          const key: any = R.keys(value!.related!)[0];
          expect(value!.related![key]!.results).is.not.undefined;
          const related: any = value!.related![key]!.results![0]!;
          expect(related).is.not.undefined;
          expect(related.text).is.not.undefined;
          done();
        });
      });
    });
  });
});
