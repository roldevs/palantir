
/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import cliFormatterModuleConnector from '../../../lib/formatter/cli';
import {
  IElementDefinition,
  IFormattedResult,
} from '../../../lib/typings';
import { JSONprettify } from '../../../lib/utils';

describe('Formatter::Cli#format', () => {
  describe('given an element definition', () => {
    const elements: IElementDefinition[] = [{
      text: 'Trap',
      related: {
        effect: {
          text: 'Trap effect',
          search: [{
            ns: 'mr',
            type: 'trap_effect',
          }],
          count: 2,
          results: [{
            text: 'Inunda arena',
          }, {
            text: 'Alarma',
          }],
        },
        trigger: {
          search: [{
            ns: 'mr',
            type: 'trap_trigger',
          }],
          results: [{
            text: 'Grosería',
          }],
        },
      },
    }, {
      text: 'Trap',
      related: {
        effect: {
          text: 'Trap effect',
          search: [{
            ns: 'mr',
            type: 'trap_effect',
          }],
          results: [{
            text: 'Jaula colgante',
          }],
        },
        trigger: {
          search: [{
            ns: 'mr',
            type: 'trap_trigger',
          }],
          results: [{
            text: 'Girar',
          }],
        },
      },
    }];
    const formatter = cliFormatterModuleConnector();

    it('returns only results formatted', (done) => {
      const expected: IFormattedResult[] = [{
        text: 'Trap',
        related: {
          effect: {
            text: 'Trap effect',
            results: [{
              text: 'Inunda arena',
            }, {
              text: 'Alarma',
            }],
          },
          trigger: {
            results: [{
              text: 'Grosería',
            }],
          },
        },
      }, {
        text: 'Trap',
        related: {
          effect: {
            text: 'Trap effect',
            results: [{
              text: 'Jaula colgante',
            }],
          },
          trigger: {
            results: [{
              text: 'Girar',
            }],
          },
        },
      }];

      formatter.format(elements).then((data: IFormattedResult[]) => {
        expect(data).to.eql(expected);
        done();
      });
    });
  });

  describe('given an deep element', () => {
    const elements: IElementDefinition[] = [{
      text: 'Mazmorra',
      related: {
        trick: {
          search: [{
            ns: 'mr',
            type: 'dungeon_trick',
          }],
          results: [{
            text: '%{physical_effect}',
            related: {
              physical_effect: {
                search: [{
                  ns: 'mr',
                  type: 'physical_effect',
                }],
                count: 2,
                results: [{
                  text: 'Iluminador/a',
                }, {
                  text: 'Floreciente',
                }],
              },
            },
          }],
        },
      },
    }];
    const formatter = cliFormatterModuleConnector();
    it('returns only results formatted', (done) => {
      const expected: IFormattedResult[] = [{
        text: 'Mazmorra',
        related: {
          trick: {
            results: [{
              text: '%{physical_effect}',
              related: {
                physical_effect: {
                  results: [{
                    text: 'Iluminador/a',
                  }, {
                    text: 'Floreciente',
                  }],
                },
              },
            }],
          },
        },
      }];

      formatter.format(elements).then((data: IFormattedResult[]) => {
        expect(data).to.eql(expected);
        done();
      });
    });
  });
});
