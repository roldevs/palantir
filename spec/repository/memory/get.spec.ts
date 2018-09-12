/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import memoryRepository from '../../../lib/repository/memory';
import {
  IOptionalElement,
  uuid,
} from '../../../lib/typings';
import { getUUID } from '../../../lib/utils';

describe('Repository::Memory#get', () => {
  describe('with repository empty', () => {
    const repository = memoryRepository({
      locale: 'es',
      elements: {},
    });
    const guid: uuid = getUUID();

    it('return null', (done) => {
      repository.get(guid).then((data: IOptionalElement) => {
        expect(data).to.be.null;
        done();
      });
    });
  });

  describe('with specific element', () => {
    it('return specific element', (done) => {
      const guid: uuid = getUUID();
      const text: string = 'Test';
      const repository = memoryRepository({
        locale: 'es',
        elements: {
          es: [{
            ns: 'ns',
            type: 'item1',
            guid,
            text,
          }, {
            ns: 'ns',
            type: 'item1',
            guid: getUUID(),
            text: 'Test2',
          }],
        },
      });

      repository.get(guid).then((data: IOptionalElement) => {
        expect(data).to.not.be.null;
        expect(data!.guid).to.eql(guid);
        expect(data!.text).to.eql(text);
        done();
      });
    });
  });
});
