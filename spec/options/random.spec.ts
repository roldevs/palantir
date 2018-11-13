/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import optionsModule from '../../src/lib/element/options';
import metaTestModule from '../../src/lib/meta/test';
import testRepository from '../../src/lib/repository/memory';
import {
  IMetaFactory,
  IOptionalElementDefinition,
  IWorldDefinition,
} from '../../src/lib/typings';

describe('Options#random', () => {
  const meta: IMetaFactory = metaTestModule();

  const world: IWorldDefinition = {
    connector: testConnector({
      elements: {},
    }),
    repository: testRepository({
      locale: 'es',
      elements: {},
    }),
    meta,
  };

  describe('table with options', () => {
    const options = optionsModule(world);
    const element: IOptionalElementDefinition = {
      text: 'test',
      options: [{
        text: 'test1',
      }, {
        text: 'test1',
      }],
    };

    it('should return a randome existant element', (done) => {
      options.random(element).then((data: IOptionalElementDefinition) => {
        expect(data).to.not.be.null;
        expect(data!.text).to.not.be.null;
        done();
      });
    });
  });
  describe('table without options', () => {
    const options = optionsModule(world);
    const element: IOptionalElementDefinition = {
      text: 'test',
    };

    it('should return null', (done) => {
      options.random(element).then((data: IOptionalElementDefinition) => {
        expect(data).to.be.null;
        done();
      });
    });
  });
});
