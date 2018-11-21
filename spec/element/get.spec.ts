/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import testConnector from '../../src/lib/connectors/test';
import elementCreator from '../../src/lib/element';
import { elementFormatter } from '../../src/lib/formatter/elementFormatter';
import metaTestModule from '../../src/lib/meta/test';
import testRepository from '../../src/lib/repository/memory';
import {
  IConnectorFactory,
  IElementDefinition,
  IElementFactory,
  IElementFormatted,
  IOptionalElementDefinition,
  IRelatedElement,
  IRelatedElements,
} from '../../src/lib/typings';

const getResult: (
  element: IOptionalElementDefinition,
  key: string,
) => IOptionalElementDefinition =
(element, key) => {
  const related: IRelatedElement = R.view(R.lensPath(['related', key]), element);
  return related.results![0] as IOptionalElementDefinition;
};

const checkResult: (
  element: IOptionalElementDefinition,
  key: string,
  title: string,
  text: string[],
) => void =
(element, key, title, text) => {
  const result: IElementDefinition = getResult(element, key)!;
  expect(result.text).to.be.oneOf(text);
  expect(result.parent!.text).to.eql(title);
};

const checkFormatted: (
  format: IElementFormatted,
  title: string,
  text: string[],
) => void =
(format, title, text) => {
  expect(format.title).to.eql(title);
  expect(format.text).to.be.oneOf(text);
};

const checkFormattedWithoutText: (
  format: IElementFormatted,
  title: string,
) => void =
(format, title) => {
  expect(format.title).to.eql(title);
  expect(format.text).to.be.undefined;
};

const getElement: (connector: IConnectorFactory) => IElementFactory =
(connector) => elementCreator({
    connector,
    repository: testRepository({
      locale: 'es',
      elements: {},
    }),
    meta: metaTestModule(),
  });

describe('Element#get', () => {
  describe('title analysis', () => {
    describe('in root element', () => {
      const elementFactory: IElementFactory = getElement(
        testConnector({
          elements: {
            es: {},
            en: {},
          },
        }),
      );

      it('sets the title accordingly', (done) => {
        const option: IElementDefinition = {
          text: 'Title',
          options: [{
            text: 'option1',
          }, {
            text: 'option2',
          }],
        };
        elementFactory.get(option).then((element: IOptionalElementDefinition) => {
          expect(element).to.not.be.null;
          expect(element!.text).to.be.oneOf(['option1', 'option2']);
          expect(element!.parent!.text).to.eql('Title');

          const format: IElementFormatted = elementFormatter().format(element!, option)!;
          checkFormatted(format, 'Title', ['option1', 'option2']);
          done();
        });
      });
    });

    describe('in related element', () => {
      const elementFactory: IElementFactory = getElement(
        testConnector({
          elements: {
            es: {
              ns: {
                type: {
                  data: {
                    text: 'Title Options',
                    options: [{
                      text: 'option1',
                    }, {
                      text: 'option2',
                    }],
                  },
                },
              },
            },
            en: {},
          },
        }),
      );

      describe('text in option element', () => {
        it('sets the title accordingly', (done) => {
          const option: IElementDefinition = {
            text: 'Title',
            related: {
              key: {
                search: [{
                  locale: 'es',
                  ns: 'ns',
                  type: 'type',
                }],
              },
            },
          };

          elementFactory.get(option).then((element: IOptionalElementDefinition) => {
            expect(element).to.not.be.null;
            expect(element!.text).to.eql('Title');

            checkResult(element, 'key', 'Title Options', ['option1', 'option2']);

            const format: IElementFormatted = elementFormatter().format(element!, option)!;
            checkFormattedWithoutText(format, 'Title');

            const child: IElementFormatted = R.nth(0, format.children!)!;
            checkFormatted(child, 'Title Options', ['option1', 'option2']);
            done();
          });
        });
      });

      describe('text in related key', () => {
        it('sets the title accordingly', (done) => {
          const option: IElementDefinition = {
            text: 'Title',
            related: {
              key: {
                text: 'Title in key',
                search: [{
                  locale: 'es',
                  ns: 'ns',
                  type: 'type',
                }],
              },
            },
          };

          elementFactory.get(option).then((element: IOptionalElementDefinition) => {
            expect(element).to.not.be.null;
            expect(element!.text).to.eql('Title');

            checkResult(element, 'key', 'Title Options', ['option1', 'option2']);

            const format: IElementFormatted = elementFormatter().format(element!, option)!;
            checkFormattedWithoutText(format, 'Title');

            const child: IElementFormatted = R.nth(0, format.children!)!;
            checkFormatted(child, 'Title in key', ['option1', 'option2']);
            done();
          });
        });
      });

      describe('text in related option', () => {
        it('sets the title accordingly', (done) => {
          const option: IElementDefinition = {
            text: 'Title 1',
            options: [{
              text: 'Title in Option 2',
              related: {
                key: {
                  text: 'Title in Related 3',
                  search: [{
                    locale: 'es',
                    ns: 'ns',
                    type: 'type',
                  }],
                },
              },
            }],
          };

          elementFactory.get(option).then((element: IOptionalElementDefinition) => {
            expect(element).to.not.be.null;
            expect(element!.parent!.text).to.eql('Title 1');

            expect(element!.text).to.eql('Title in Option 2');

            // checkResult(element, 'key', null, ['option1', 'option2']);

            const format: IElementFormatted = elementFormatter().format(element!, option)!;
            checkFormattedWithoutText(format, 'Title 1');

            const child1: IElementFormatted = R.nth(0, format.children!)!;
            checkFormattedWithoutText(child1, 'Title in Option 2');

            const child2: IElementFormatted = R.nth(0, child1.children!)!;

            checkFormatted(child2, 'Title in Related 3', ['option1', 'option2']);
            done();
          });
        });
      });
    });

  //   describe('with related directly in root table', () => {
  //     describe('title in related table', () => {
  //       const world: IWorldFactory = getWorld(
  //         testConnector({
  //           elements: {
  //             es: {
  //               ns1: {
  //                 type1: {
  //                   data: {
  //                     text: 'Title 1',
  //                     related: {
  //                       key: {
  //                         search: [{
  //                           locale: 'es',
  //                           ns: 'ns1',
  //                           type: 'type2',
  //                         }],
  //                       },
  //                     },
  //                   },
  //                 },
  //                 type2: {
  //                   data: {
  //                     text: 'Title 2',
  //                     options: [{
  //                       text: 'option1',
  //                     }, {
  //                       text: 'option2',
  //                     }],
  //                   },
  //                 },
  //               },
  //             },
  //             en: {},
  //           },
  //         }),
  //       );

  //       it('sets the title accordingly', (done) => {
  //         const search: IRelatedElement = {
  //           search: [{
  //             locale: 'es',
  //             ns: 'ns1',
  //             type: 'type1',
  //           }],
  //           count: 1,
  //         };
  //         world.get(search).then((element: IWorldElement[]) => {
  //           const formatted: IElementFormatted = element[0].format!;
  //           expect(formatted.title).to.eql('Title 1');
  //           expect(formatted.text).to.be.undefined;

  //           const child: IElementFormatted = formatted.children![0];
  //           expect(child.title).to.eql('Title 2');
  //           expect(child.text).to.be.oneOf(['option1', 'option2']);
  //           done();
  //         });
  //       });
  //     });
  //     describe('title in related item', () => {
  //       const world: IWorldFactory = getWorld(
  //         testConnector({
  //           elements: {
  //             es: {
  //               ns1: {
  //                 type1: {
  //                   data: {
  //                     text: 'Title 1',
  //                     related: {
  //                       key: {
  //                         text: 'Title R',
  //                         search: [{
  //                           locale: 'es',
  //                           ns: 'ns1',
  //                           type: 'type2',
  //                         }],
  //                       },
  //                     },
  //                   },
  //                 },
  //                 type2: {
  //                   data: {
  //                     text: 'Title 2',
  //                     options: [{
  //                       text: 'option1',
  //                     }, {
  //                       text: 'option2',
  //                     }],
  //                   },
  //                 },
  //               },
  //             },
  //             en: {},
  //           },
  //         }),
  //       );

  //       it('sets the title accordingly', (done) => {
  //         const search: IRelatedElement = {
  //           search: [{
  //             locale: 'es',
  //             ns: 'ns1',
  //             type: 'type1',
  //           }],
  //           count: 1,
  //         };
  //         world.get(search).then((element: IWorldElement[]) => {
  //           const formatted: IElementFormatted = element[0].format!;
  //           expect(formatted.title).to.eql('Title 1');
  //           expect(formatted.text).to.be.undefined;

  //           const child: IElementFormatted = formatted.children![0];
  //           expect(child.title).to.eql('Title R');
  //           expect(child.text).to.be.oneOf(['option1', 'option2']);
  //           done();
  //         });
  //       });
  //     });
  //   });

  //   describe('with related in options table', () => {
  //     describe('title in related item', () => {
  //       const world: IWorldFactory = getWorld(
  //         testConnector({
  //           elements: {
  //             es: {
  //               ns1: {
  //                 type1: {
  //                   data: {
  //                     text: 'Title 1',
  //                     options: [{
  //                       text: 'Title R',
  //                       related: {
  //                         key: {
  //                           search: [{
  //                             locale: 'es',
  //                             ns: 'ns1',
  //                             type: 'type2',
  //                           }],
  //                         },
  //                       },
  //                     }],
  //                   },
  //                 },
  //                 type2: {
  //                   data: {
  //                     text: 'Title 2',
  //                     options: [{
  //                       text: 'option1',
  //                     }, {
  //                       text: 'option2',
  //                     }],
  //                   },
  //                 },
  //               },
  //             },
  //             en: {},
  //           },
  //         }),
  //       );

  //       it('sets the title accordingly', (done) => {
  //         const search: IRelatedElement = {
  //           search: [{
  //             locale: 'es',
  //             ns: 'ns1',
  //             type: 'type1',
  //           }],
  //           count: 1,
  //         };
  //         world.get(search).then((element: IWorldElement[]) => {
  //           const formatted: IElementFormatted = element[0].format!;
  //           expect(formatted.title).to.eql('Title 1');
  //           expect(formatted.text).to.be.undefined;

  //           const child: IElementFormatted = formatted.children![0];
  //           expect(child.title).to.eql('Title R');
  //           expect(child.text).to.be.oneOf(['option1', 'option2']);
  //           done();
  //         });
  //       });
  //     });
  //   });
  });
});
