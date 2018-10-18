/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import relatedModule from '../../src/lib/element/related';
import testRepository from '../../src/lib/repository/memory';
import {
  ERandomOption,
  IElementDefinition,
  IOptionalElement,
  IOptionalElementDefinition,
  IRelatedElement,
} from '../../src/lib/typings';
import { JSONprettify } from '../../src/lib/utils';
import worldCreator from '../../src/lib/world';

describe('World#get', () => {
  const connector = testConnector({
    elements: {
      es: {
        maze_rats: {
          npc_asset: {
            text: 'Npc Asset',
            options: [{
              text: 'Lider ${faction}',
              related: {
                faction: {
                  search: [{
                    ns: 'maze_rats',
                    type: 'faction',
                    random: ERandomOption.all,
                  }],
                },
              },
            }],
          },
          faction: {
            text: 'Faction',
            options: [{
              text: 'Movimiento artístico',
            }],
          },
        },
      },
      en: {},
    },
  });
  const world = worldCreator({
    locale: 'es',
    connector,
    repository: testRepository({
      locale: 'es',
      elements: {},
    }),
  });

  describe('simple search', () => {
    const search: IRelatedElement = {
      search: [{
        ns: 'maze_rats',
        type: 'faction',
      }],
      count: 1,
    };
    it('return the only faction defined', (done) => {
      world.get(search).then((elements: Array<IOptionalElementDefinition | IOptionalElement>) => {
        const element: IElementDefinition = elements[0]! as IElementDefinition;
        expect(element).to.not.be.null;
        expect(element.text).to.eql('Movimiento artístico');
        done();
      });
    });
  });

  describe('deep search', () => {
    const search: IRelatedElement = {
      search: [{
        ns: 'maze_rats',
        type: 'npc_asset',
      }],
    };
    it('return the npc_asset with faction related', (done) => {
      world.get(search).then((elements: Array<IOptionalElementDefinition | IOptionalElement>) => {
        const element: IElementDefinition = elements[0]! as IElementDefinition;
        const related: IRelatedElement = element.related!.faction;

        expect(element).to.not.be.null;
        expect(element.text).to.eql('Lider ${faction}');
        expect(related).to.not.be.null;

        // tslint:disable-next-line:no-console
        console.log(JSONprettify(elements));

        expect(related.results).to.not.be.empty;
        done();
      });
    });
  });
});
