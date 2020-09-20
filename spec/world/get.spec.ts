/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import metaTestModule from '../../src/lib/meta/test';
import testRepository from '../../src/lib/repository/memory';
import {
  ERandomOption,
  IConnectorFactory,
  IElementFormatted,
  IRelatedElement,
  IWorldElement,
  IWorldFactory,
} from '../../src/lib/typings';
import worldCreator from '../../src/lib/world';

const getWorld: (connector: IConnectorFactory) => IWorldFactory =
(connector) => worldCreator({
    connector,
    repository: testRepository({
      locale: 'es',
      elements: {},
    }),
    meta: metaTestModule(),
  });

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
                        locale: 'es',
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
    const world = getWorld(connector);
    describe('simple search', () => {
      const search: IRelatedElement = {
        search: [{
          locale: 'es',
          ns: 'maze_rats',
          type: 'faction',
        }],
        count: 1,
      };
      it('return the only faction defined', (done) => {
        world.get(search).then((elements: (IWorldElement | null)[]) => {
          const element: IElementFormatted = elements[0]!.format!;
          expect(element).to.not.be.null;
          expect(element.text).to.eql('Movimiento artístico');
          done();
        });
      });
    });

    describe('deep search', () => {
      const search: IRelatedElement = {
        search: [{
          locale: 'es',
          ns: 'maze_rats',
          type: 'npc_asset',
        }],
      };
      it('return the npc_asset with faction related', (done) => {
        world.get(search).then((elements: (IWorldElement | null)[]) => {
          const element: IElementFormatted = elements[0]!.format!;
          expect(element).to.not.be.null;
          expect(element.title).to.eql('Npc Asset');
          expect(element.children).to.not.be.empty;

          const child1: IElementFormatted = element.children![0]!;
          expect(child1).to.not.be.null;
          expect(child1.title).to.eql('Npc Asset 1');

          const child2: IElementFormatted = child1.children![0]!;
          expect(child2).to.not.be.null;
          expect(child2.title).to.eql('Lider ${faction}');
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
                  text: 'Animal 1',
                  related: {
                    animal_aerial: {
                      search: [{
                        locale: 'es',
                        ns: 'maze_rats',
                        type: 'animal_aerial',
                      }],
                    },
                  },
                }, {
                  text: 'Animal 2',
                  related: {
                    animal_aquatic: {
                      search: [{
                        locale: 'es',
                        ns: 'maze_rats',
                        type: 'animal_aquatic',
                      }],
                    },
                  },
                }, {
                  text: 'Animal 3',
                  related: {
                    animal_terrestrial: {
                      search: [{
                        locale: 'es',
                        ns: 'maze_rats',
                        type: 'animal_terrestrial',
                      }],
                    },
                  },
                }],
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
    const world = getWorld(connector);
    describe('deep search', () => {
      const search: IRelatedElement = {
        search: [{
          locale: 'es',
          ns: 'maze_rats',
          type: 'animal',
        }],
      };
      it('return the animal related', (done) => {
        world.get(search).then((elements: (IWorldElement | null)[]) => {
          const element: IElementFormatted = elements[0]!.format!;
          expect(element.title).to.eql('Animal');

          const child1: IElementFormatted = element.children![0];
          expect(child1.title).to.be.oneOf(['Animal 1', 'Animal 2', 'Animal 3']);

          const child2: IElementFormatted = child1.children![0];
          expect(child2.title).to.be.oneOf(['Animal aéreo', 'Animal acuático', 'Animal terrestre']);
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
    const world = getWorld(connector);
    describe('deep search', () => {
      const search: IRelatedElement = {
        search: [{
          locale: 'es',
          ns: 'maze_rats',
          type: 'mutation',
        }],
      };
      it('return the element with default title', (done) => {
        world.get(search).then((elements: (IWorldElement | null)[]) => {
          const element: IElementFormatted = elements[0]!.format!;
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
                        locale: 'es',
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
    const world = getWorld(connector);
    describe('random search', () => {
      const search: IRelatedElement = {
        search: [{
          locale: 'es',
          ns: 'maze_rats',
          type: 'faction',
        }],
        count: 'd2',
      };
      it('return the one or two factions', (done) => {
        world.get(search).then((elements: (IWorldElement | null)[]) => {
          expect(elements.length).to.be.oneOf([1, 2]);

          const element: IElementFormatted = elements[0]!.format!;
          expect(element).to.not.be.null;
          expect(element.text).to.be.oneOf(['Movimiento artístico', 'Npc Asset 2']);
          done();
        });
      });
    });
  });

  // describe('default locale and system', () => {
  //   describe('in related element', () => {
  //     const connector = testConnector({
  //       elements: {
  //         es: {
  //           ns: {
  //             type1: {
  //               data: {
  //                 text: 'Type1',
  //                 related: {
  //                   faction: {
  //                     search: [{
  //                       type: 'type2',
  //                     }],
  //                   },
  //                 },
  //               },
  //             },
  //             type2: {
  //               data: {
  //                 text: 'Type 2',
  //                 options: [{
  //                   text: 'Option 1',
  //                 }, {
  //                   text: 'Option 2',
  //                 }],
  //               },
  //             },
  //           },
  //         },
  //         en: {},
  //       },
  //     });
  //     const world = getWorld(connector);

  //     describe('random search', () => {
  //       const search: IRelatedElement = {
  //         search: [{
  //           locale: 'es',
  //           ns: 'ns',
  //           type: 'type1',
  //         }],
  //       };
  //       it('return the type2 option correctly', (done) => {
  //         world.get(search).then((elements: IWorldElement[]) => {
  //           const element: IElementFormatted = elements[0]!.format!;
  //           expect(element).to.not.be.null;
  //           expect(element.text).to.be.oneOf(['Option 1', 'Option 2']);
  //           done();
  //         });
  //       });
  //     });
  //   });
  // });
});
