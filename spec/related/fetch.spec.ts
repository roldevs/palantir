/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../lib/connectors/test';
import relatedModule from '../../lib/related';
import testRepository from '../../lib/repository/memory';
import {
  IOptionalElementDefinition,
  IWorldDefinition,
} from '../../lib/typings';

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
                text: 'ns1.item1',
                options: [{
                  text: 'ns1.item11',
                }],
              },
              item2: {
                text: 'ns1.item2',
                options: [{
                  text: 'ns1.item22',
                }],
              },
            },
            ns2: {
              item1: {
                text: 'ns2.item1',
                options: [{
                  text: 'ns1.item11',
                }, {
                  text: 'ns1.item11',
                }],
              },
              item2: {
                text: 'ns2.item2',
                options: [{
                  text: 'ns1.item12',
                }],
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
          expect(data).to.eql({
            text: 'Test',
            related: {
              key: {
                search: [{
                  ns: 'ns2',
                  type: 'item2',
                }],
                results: [{
                  text: 'ns1.item12',
                }],
              },
            },
          });
          done();
        });
      });
    });
  });
});
