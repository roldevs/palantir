/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import testRepository from '../../src/lib/repository/memory';
import {
  ERandomOption,
  IElementFormatted,
  IRelatedElement,
} from '../../src/lib/typings';
import worldCreator from '../../src/lib/world';

describe('World#get', () => {
  describe('with faction', () => {
    const connector = testConnector({
      elements: {
        es: {
          maze_rats: {
            npc_asset: {
              data: {
                text: 'Npc Asset',
                options: [{
                  text: 'Npc Asset 1',
                  related: {
                    faction: {
                      text: 'Lider ${faction}',
                      search: [{
                        ns: 'maze_rats',
                        type: 'faction',
                        random: ERandomOption.all,
                      }],
                    },
                  },
                }],
              },
            },
            faction: {
              data: {
                text: 'Faction',
                options: [{
                  text: 'Movimiento artístico',
                }],
              },
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
        world.get(search).then((elements: IElementFormatted[]) => {
          const element: IElementFormatted = elements[0]!;
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
        world.get(search).then((elements: IElementFormatted[]) => {
          const element: IElementFormatted = elements[0]!;
          expect(element).to.not.be.null;
          expect(element.title).to.eql('Npc Asset');
          expect(element.children).to.not.be.empty;

          const child: IElementFormatted = element.children![0]!;
          expect(child).to.not.be.null;
          expect(child.title).to.eql('Lider ${faction}');
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
              data: {
                text: 'Animal',
                options: [{
                  text: 'Animal',
                  related: {
                    animal_aerial: {
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
                        search: [{
                          ns: 'maze_rats',
                          type: 'animal_terrestrial',
                        }],
                      },
                    },
                  },
                ],
              },
            },
            animal_aerial: {
              data: {
                text: 'Animal aéreo',
                options: [{
                  text: 'Albatros',
                }],
              },
            },
            animal_aquatic: {
              data: {
                text: 'Animal acuático',
                options: [{
                  text: 'Cacodrilo',
                }],
              },
            },
            animal_terrestrial: {
              data: {
                text: 'Animal terrestre',
                options: [{
                  text: 'Hormiga',
                }],
              },
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
      it('return the animal related', (done) => {
        world.get(search).then((elements: IElementFormatted[]) => {
          const element: IElementFormatted = elements[0]!;
          expect(element.title).to.eql('Animal');

          const child: IElementFormatted = element.children![0];
          expect(child.title).to.be.oneOf(['Animal aéreo', 'Animal acuático', 'Animal terrestre']);
          done();
        });
      });
    });
  });

  describe('with options', () => {
    const connector = testConnector({
      elements: {
        es: {
          maze_rats: {
            mutation: {
              data: {
                text: 'Mutación',
                options: [{
                  text: 'Envejece',
                }],
              },
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
          type: 'mutation',
        }],
      };
      it('return the element with default title', (done) => {
        world.get(search).then((elements: IElementFormatted[]) => {
          const element: IElementFormatted = elements[0]!;
          expect(element.text).to.eql('Envejece');
          expect(element.title).to.eql('Mutación');
          done();
        });
      });
    });
  });
  describe('with two faction', () => {
    const connector = testConnector({
      elements: {
        es: {
          maze_rats: {
            npc_asset: {
              data: {
                text: 'Npc Asset',
                options: [{
                  text: 'Npc Asset 1',
                  related: {
                    faction: {
                      text: 'Lider ${faction}',
                      search: [{
                        ns: 'maze_rats',
                        type: 'faction',
                        random: ERandomOption.all,
                      }],
                    },
                  },
                }, {
                  text: 'Npc Asset 2',
                }],
              },
            },
            faction: {
              data: {
                text: 'Faction',
                options: [{
                  text: 'Movimiento artístico',
                }],
              },
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

    describe('random search', () => {
      const search: IRelatedElement = {
        search: [{
          ns: 'maze_rats',
          type: 'faction',
        }],
        count: 'd2',
      };
      it('return the one or two factions', (done) => {
        world.get(search).then((elements: IElementFormatted[]) => {
          expect(elements.length).to.be.oneOf([1, 2]);

          const element: IElementFormatted = elements[0]!;
          expect(element).to.not.be.null;
          expect(element.text).to.be.oneOf(['Movimiento artístico', 'Npc Asset 2']);
          done();
        });
      });
    });
  });
});
