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
  describe('with faction', () => {
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
          expect(related.results).to.not.be.empty;
          done();
        });
      });
    });
  });

  describe('with animal', () => {
    const connector = testConnector({
      elements: {
        es: {
          maze_rats: {
            animal: {
              text: 'Animal',
              options: [{
                text: 'Animal',
                related: {
                  animal_aerial: {
                    text: 'Animal Aéreo',
                    search: [{
                      ns: 'maze_rats',
                      type: 'animal_aerial',
                    }],
                  },
                },
              }, {
                text: 'Animal',
                related: {
                  animal_aquatic: {
                    text: 'Animal Acuático',
                    search: [{
                      ns: 'maze_rats',
                      type: 'animal_aquatic',
                    }],
                  },
                },
              }, {
                text: 'Animal',
                  related: {
                    animal_terrestrial: {
                      text: 'Animal Terrestre',
                      search: [{
                        ns: 'maze_rats',
                        type: 'animal_terrestrial',
                      }],
                    },
                  },
                },
              ],
            },
            animal_aerial: {
              text: 'Animal aéreo',
              options: [{
                text: 'Albatros',
              }],
            },
            animal_aquatic: {
              text: 'Animal acuático',
              options: [{
                text: 'Cacodrilo',
              }],
            },
            animal_terrestrial: {
              text: 'Animal terrestre',
              options: [{
                text: 'Hormiga',
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

    describe('deep search', () => {
      const search: IRelatedElement = {
        search: [{
          ns: 'maze_rats',
          type: 'animal',
        }],
      };
      it('return the npc_asset with faction related', (done) => {
        world.get(search).then((elements: Array<IOptionalElementDefinition | IOptionalElement>) => {
          const element: IElementDefinition = elements[0]! as IElementDefinition;

          // tslint:disable-next-line:no-console
          console.log(element);
          expect(element.text).to.eql('Animal');
          done();
        });
      });
    });
  });
});
