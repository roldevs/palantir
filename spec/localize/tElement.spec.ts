/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import localizeCreator from '../../lib/localize';
import relatedCreator from '../../lib/related';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
} from '../../lib/typings';

describe('Localize#tElement', () => {
  const translations = {
    en: {
      translation: {
        item1: {
          item_1_1: 'item_1_1*en*',
          item_1_2: 'item_1_2*en*',
        },
        item2: {
          item_2_1: 'item_2_1*en*',
          item_2_2: 'item_2_2*en*',
        },
      },
    },
    es: {
      translation: {
        item1: {
          item_1_1: 'item_1_1*es*',
          item_1_2: 'item_1_2*es*',
        },
        item2: {
          item_2_1: 'item_2_1*es*',
          item_2_2: 'item_2_2*es*',
        },
      },
    },
  };

  describe('without alias', () => {
    const aliasDefinition: IAliasDefinition = {};
    const definitions: IElementDefinition[] = [{
      type: 'item1',
      text: 'item1',
      options: [{
        type: 'item1',
        text: 'item_1_1',
      }, {
        type: 'item1',
        text: 'item_1_2',
      }],
    }, {
      type: 'item2',
      text: 'item2',
      options: [{
        type: 'item2',
        text: 'item_2_1',
      }, {
        type: 'item2',
        text: 'item_2_2',
      }],
    }];
    const existing: IElement[] = [{
      type: 'item1', guid: uuidv1(), text: 'item_1_1',
    }, {
      type: 'item1', guid: uuidv1(), text: 'item_1_2',
    }, {
      type: 'item2', guid: uuidv1(), text: 'item_2_1',
    }, {
      type: 'item3', guid: uuidv1(), text: 'item_3_1',
    }];
    describe('simple element', () => {
      const related = relatedCreator(aliasDefinition, definitions, existing);
      describe('en language', () => {
        describe('item1', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'en', translations});
            const element: IElementDefinition = related.get([{type: 'item1'}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item1');
            expect(element.text).to.be.oneOf(['item_1_1', 'item_1_2']);
            expect(subject.text).to.be.oneOf(['item_1_1*en*', 'item_1_2*en*']);
          });
        });

        describe('item2', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'en', translations});
            const element: IElementDefinition = related.get([{type: 'item2'}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item2');
            expect(element.text).to.be.oneOf(['item_2_1', 'item_2_2']);
            expect(subject.text).to.be.oneOf(['item_2_1*en*', 'item_2_2*en*']);
          });
        });
      });

      describe('es language', () => {
        describe('item1', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'es', translations});
            const element: IElementDefinition = related.get([{type: 'item1'}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item1');
            expect(element.text).to.be.oneOf(['item_1_1', 'item_1_2']);
            expect(subject.text).to.be.oneOf(['item_1_1*es*', 'item_1_2*es*']);
          });
        });

        describe('item2', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'es', translations});
            const element: IElementDefinition = related.get([{type: 'item2'}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item2');
            expect(element.text).to.be.oneOf(['item_2_1', 'item_2_2']);
            expect(subject.text).to.be.oneOf(['item_2_1*es*', 'item_2_2*es*']);
          });
        });
      });

      const propFromType: (prop: string, type: string) => (defs: IElement[]) => any[] =
      (prop, type) => R.compose(
        R.map(R.prop(prop)),
        R.filter(R.propEq('type', type)),
      );

      describe('es language', () => {
        describe('item1', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'es', translations});
            const element: IElement = related.get([{type: 'item1', random: ERandomOption.exists}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item1');
            expect(element.guid).to.be.oneOf(propFromType('guid', 'item1')(existing));
            expect(element.text).to.be.oneOf(propFromType('text', 'item1')(existing));
            expect(subject.text).to.be.oneOf(['item_1_1*es*', 'item_1_2*es*']);
          });
        });
      });
      describe('item2', () => {
        it('returns a random defined element', () => {
          const localize = localizeCreator({locale: 'es', translations});
          const element: IElement = related.get([{type: 'item2', random: ERandomOption.exists}]);
          const subject: any = localize.tElement(element);
          expect(element.type).to.eql('item2');
          expect(element.guid).to.be.oneOf(propFromType('guid', 'item2')(existing));
          expect(element.text).to.be.oneOf(propFromType('text', 'item2')(existing));
          expect(subject.text).to.be.oneOf(['item_2_1*es*', 'item_2_2*es*']);
        });
      });
      describe('en language', () => {
        describe('item1', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'en', translations});
            const element: IElement = related.get([{type: 'item1', random: ERandomOption.exists}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item1');
            expect(element.guid).to.be.oneOf(propFromType('guid', 'item1')(existing));
            expect(element.text).to.be.oneOf(propFromType('text', 'item1')(existing));
            expect(subject.text).to.be.oneOf(['item_1_1*en*', 'item_1_2*en*']);
          });
        });
        describe('item2', () => {
          it('returns a random defined element', () => {
            const localize = localizeCreator({locale: 'en', translations});
            const element: IElement = related.get([{type: 'item2', random: ERandomOption.exists}]);
            const subject: any = localize.tElement(element);
            expect(element.type).to.eql('item2');
            expect(element.guid).to.be.oneOf(propFromType('guid', 'item2')(existing));
            expect(element.text).to.be.oneOf(propFromType('text', 'item2')(existing));
            expect(subject.text).to.be.oneOf(['item_2_1*en*', 'item_2_2*en*']);
          });
        });
      });
    });
    describe('complex element', () => {
      const element: IElementDefinition = {
        type: 'item1',
        text: 'item_1_2',
        related: {
          item2: {
            search: [],
            result: {
              type: 'item2',
              text: 'item_2_2',
            },
          },
        },
      };
      describe('en language', () => {
        it('localize element to en', () => {
          const localize = localizeCreator({locale: 'en', translations});
          const subject: any = localize.tElement(element);
          const expected: IElementDefinition = {
            type: 'item1',
            text: 'item_1_2*en*',
            related: {
              item2: {
                search: [],
                result: {
                  type: 'item2',
                  text: 'item_2_2*en*',
                },
              },
            },
          };
          expect(subject).to.eql(expected);
        });
      }),
      describe('es language', () => {
        it('localize element to es', () => {
          const localize = localizeCreator({locale: 'es', translations});
          const subject: any = localize.tElement(element);
          const expected: IElementDefinition = {
            type: 'item1',
            text: 'item_1_2*es*',
            related: {
              item2: {
                search: [],
                result: {
                  type: 'item2',
                  text: 'item_2_2*es*',
                },
              },
            },
          };
          expect(subject).to.eql(expected);
        });
      });
    });
    describe('existing element', () => {
      const guid: string = uuidv1();
      const element: IElement = {
        guid,
        type: 'item1',
        text: 'item_1_2',
      };
      describe('en language', () => {
        it('localize element to en', () => {
          const localize = localizeCreator({locale: 'en', translations});
          const subject: any = localize.tElement(element);
          const expected: IElement = {
            guid,
            type: 'item1',
            text: 'item_1_2*en*',
          };
          expect(subject).to.eql(expected);
        });
      }),
      describe('es language', () => {
        it('localize element to es', () => {
          const localize = localizeCreator({locale: 'es', translations});
          const subject: any = localize.tElement(element);
          const expected: IElement = {
            guid,
            type: 'item1',
            text: 'item_1_2*es*',
          };
          expect(subject).to.eql(expected);
        });
      });
    });
  });
});
