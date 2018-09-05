/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../lib/connectors/test';
import optionsModule from '../../lib/options';
import testRepository from '../../lib/repository/test';
import {
  IElementDefinition,
  IOptionalElementDefinition,
  IWorldDefinition,
} from '../../lib/typings';

describe('Options#random', () => {
  const world: IWorldDefinition = {
    locale: 'es',
    connector: testConnector({
      elements: {},
    }),
    repository: testRepository({
      elements: {},
    }),
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
      options.random(element).then((data: IElementDefinition | null) => {
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
      options.random(element).then((data: IElementDefinition | null) => {
        expect(data).to.be.null;
        done();
      });
    });
  });
});
