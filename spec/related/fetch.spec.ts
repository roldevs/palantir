/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import relatedModule from '../../src/lib/element/related';
import testRepository from '../../src/lib/repository/memory';
import {
  IOptionalElementDefinition,
  IWorldDefinition,
} from '../../src/lib/typings';

describe('Related#fetch', () => {
  describe('with repository empty', () => {
    const repository = testRepository({
      locale: 'es',
      elements: {},
    });

    describe('simple search', () => {
      const connector = testConnector({
        elements: {
          es: {
            ns1: {
              item1: {
                data: {
                  text: 'ns1.item1',
                  options: [{
                    text: 'ns1.item11',
                  }],
                },
              },
              item2: {
                data: {
                  text: 'ns1.item2',
                  options: [{
                    text: 'ns1.item22',
                  }],
                },
              },
            },
            ns2: {
              item1: {
                data: {
                  text: 'ns2.item1',
                  options: [{
                    text: 'ns1.item11',
                  }, {
                    text: 'ns1.item11',
                  }],
                },
              },
              item2: {
                data: {
                  text: 'ns2.item2',
                  options: [{
                    text: 'ns1.item12',
                  }],
                },
              },
            },
          },
          en: {},
        },
      });

      const world: IWorldDefinition = {
        locale: 'es',
        connector,
        repository,
      };

      it('return the ns2:item2 option', (done) => {
        const element: IOptionalElementDefinition = {
          text: 'Test',
          related: {
            key: {
              search: [{
                ns: 'ns2',
                type: 'item2',
              }],
            },
          },
        };

        const related = relatedModule(world);

        related.fetch(element).then((data: IOptionalElementDefinition) => {
          expect(data).to.not.be.null;
          expect(data!.text).to.eql('Test');
          expect(data!.related!.key.search).to.eql([{
            ns: 'ns2',
            type: 'item2',
          }]);
          expect(data!.related!.key.results![0].text).to.eql('ns1.item12');
          done();
        });
      });
    });

    describe('with dice', () => {
      const connector = testConnector({
        elements: {
          es: {},
          en: {},
        },
      });

      const world: IWorldDefinition = {
        locale: 'es',
        connector,
        repository,
      };

      it('return the dice element', (done) => {
        const element: IOptionalElementDefinition = {
          text: 'Test',
          related: {
            key: {
              dice: 'd6+2',
            },
          },
        };

        const related = relatedModule(world);

        related.fetch(element).then((data: IOptionalElementDefinition) => {
          expect(data).to.not.be.null;
          expect(data!.text).to.eql('Test');
          expect(data!.related!.key.results![0].text).to.be.oneOf(['3', '4', '5', '6', '7', '8']);
          done();
        });
      });
    });
  });
});
