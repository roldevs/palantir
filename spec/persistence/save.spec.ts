/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import persistenceCreator from '../../lib/persistence';
import {
  IElement,
  IElementDefinition,
  IPersistanceSave,
} from '../../lib/typings';
import { expectElementEqualDef } from '../support';

describe('Persistence#save', () => {
  describe('with normal element', () => {
    it('save two elements', () => {
      const element1: IElementDefinition = {
        type: 'item1',
        text: 'item1_1_1',
      };
      const element2: IElementDefinition = {
        type: 'item2',
        text: 'item2_1_1',
      };

      let service = persistenceCreator([]);
      let subject: IPersistanceSave = service.save(element1);
      expect(subject.element.guid).to.not.be.null;
      expectElementEqualDef(subject.element, element1);
      expect(subject.existing.length).to.eql(1);
      expectElementEqualDef(subject.existing[0], element1);
      expect(subject.existing[0].guid).to.eql(subject.element.guid);

      // Add second element
      service = persistenceCreator(subject.existing);
      subject = service.save(element2);
      expect(subject.element.guid).to.not.be.null;
      expectElementEqualDef(subject.element, element2);
      expect(subject.existing.length).to.eql(2);
      expectElementEqualDef(subject.existing[1], element2);
      expect(subject.existing[1].guid).to.eql(subject.element.guid);
    });
  });

  describe('with complex elements', () => {
    it('save two elements', () => {
      const element2: IElementDefinition = {
        type: 'item2',
        text: 'item2_1_1',
      };
      const element1: IElementDefinition = {
        type: 'item1',
        text: 'item1_1_1',
        related: {
          item2: {
            search: [],
            result: element2,
          },
        },
      };

      const service = persistenceCreator([]);
      const subject: IPersistanceSave = service.save(element1);
      expect(subject.element.guid).to.not.be.null;
      expectElementEqualDef(subject.element, element1);

      // Element 1 related to second
      expect(subject.element.related).to.not.be.undefined;
      expect(subject.element.related!.item2, subject.existing[1].guid);

      // Two new existing elements
      expect(subject.existing.length).to.eql(2);
      expectElementEqualDef(subject.existing[1], element1);
      expectElementEqualDef(subject.existing[0], element2);
    });
    it('save three elements', () => {
      const element3: IElementDefinition = {
        type: 'item3',
        text: 'item3_1_1',
      };
      const element2: IElementDefinition = {
        type: 'item2',
        text: 'item2_1_1',
        related: {
          item3: {
            search: [],
            result: element3,
          },
        },
      };
      const element1: IElementDefinition = {
        type: 'item1',
        text: 'item1_1_1',
        related: {
          item2: {
            search: [],
            result: element2,
          },
        },
      };

      const service = persistenceCreator([]);
      const subject: IPersistanceSave = service.save(element1);
      expect(subject.element.guid).to.not.be.null;
      expectElementEqualDef(subject.element, element1);

      // Element 1 related to second
      expect(subject.element.related).to.not.be.undefined;
      expect(subject.element.related!.item2, subject.existing[1].guid);
      expect(subject.existing[1].related!.item3, subject.existing[0].guid);

      // Two new existing elements
      expect(subject.existing.length).to.eql(3);
      expectElementEqualDef(subject.existing[2], element1);
      expectElementEqualDef(subject.existing[1], element2);
      expectElementEqualDef(subject.existing[0], element3);
    });
  });
});
