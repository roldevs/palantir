/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as R from 'ramda';
import uuidv1 from 'uuid/v1';
import related from '../../lib/related';
import {
  ERandomOption,
  IAliasDefinition,
  IElement,
  IElementDefinition,
  IRelatedElement,
} from '../../lib/typings';
import { debugObject } from '../support';

describe('Related#get simple', () => {
  describe('get one', () => {
    describe('from definition', () => {
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
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid: uuidv1(), text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related(aliasDefinition, definitions, existing);

      it('returns a random defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1'}]});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(1);

        const subject: IElementDefinition = relatedElement.results![0] as IElementDefinition;
        expect(subject.type).to.eql('item1');
        expect(subject.text).to.be.oneOf(['item_1_1', 'item_1_2']);
      });

      it('returns an existing defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1', random: ERandomOption.exists}]});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(1);

        const subject: IElement = relatedElement.results![0] as IElement;
        expect(subject.type).to.eql('item1');
        expect(subject.guid).to.be.oneOf([existing[0].guid, existing[1].guid]);
      });
    });

    const guidsFromType: (type: string) => (defs: IElement[]) => any[] =
    (type) => R.compose(
      R.map(R.prop('guid')),
      R.filter(R.propEq('type', type)),
    );

    describe('from existing', () => {
      const existing: IElement[] = [{
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid: uuidv1(), text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related({}, [], existing);

      it('returns a random defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1', random: ERandomOption.all}]});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(1);

        const subject: IElement = relatedElement.results![0] as IElement;
        expect(subject.type).to.eql('item1');
        expect(subject.guid).to.be.oneOf(guidsFromType('item1')(existing));
      });

      it('returns an existing defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1', random: ERandomOption.exists}]});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(1);

        const subject: IElement = relatedElement.results![0] as IElement;
        expect(subject.type).to.eql('item1');
        expect(subject.guid).to.be.oneOf([existing[0].guid, existing[1].guid]);
      });
    });
  });

  describe('get two', () => {
    describe('from definition', () => {
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
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid: uuidv1(), text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related(aliasDefinition, definitions, existing);

      it('returns a random defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1'}], count: 2});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(2);

        const subject: IElementDefinition[] = relatedElement.results! as IElementDefinition[];
        R.forEach((element) => {
          expect(element.type).to.eql('item1');
          expect(element.text).to.be.oneOf(['item_1_1', 'item_1_2']);
        }, subject);
      });

      it('returns an existing defined element', () => {
        const relatedElement: IRelatedElement = service.get({
          search: [{type: 'item1', random: ERandomOption.exists}],
          count: 2,
        });
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(2);

        const subject: IElement[] = relatedElement.results! as IElement[];
        R.forEach((element) => {
          expect(element.type).to.eql('item1');
          expect(element.guid).to.be.oneOf([existing[0].guid, existing[1].guid]);
        }, subject);
      });
    });

    const guidsFromType: (type: string) => (defs: IElement[]) => any[] =
    (type) => R.compose(
      R.map(R.prop('guid')),
      R.filter(R.propEq('type', type)),
    );

    describe('from existing', () => {
      const existing: IElement[] = [{
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid: uuidv1(), text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related({}, [], existing);

      it('returns a random defined element', () => {
        const relatedElement: IRelatedElement = service.get({
          search: [{type: 'item1', random: ERandomOption.all}],
          count: 2,
        });
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(2);

        const subject: IElement[] = relatedElement.results! as IElement[];
        R.forEach((element) => {
          expect(element.type).to.eql('item1');
          expect(element.guid).to.be.oneOf(guidsFromType('item1')(existing));
        }, subject);
      });

      it('returns an existing defined element', () => {
        const relatedElement: IRelatedElement = service.get({
          search: [{type: 'item1', random: ERandomOption.exists}],
          count: 2,
        });
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(2);

        const subject: IElement[] = relatedElement.results! as IElement[];
        R.forEach((element) => {
          expect(element.type).to.eql('item1');
          expect(element.guid).to.be.oneOf([existing[0].guid, existing[1].guid]);
        }, subject);
      });
    });
  });

  describe('get two', () => {
    describe('from related', () => {
      const aliasDefinition: IAliasDefinition = {};
      const definitions: IElementDefinition[] = [{
        type: 'item1',
        text: 'item1',
        related: {
          item2: {
            search: [{ type: 'item2' }],
            count: 2,
          },
        },
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
        type: 'item1', guid: uuidv1(), text: 'item1_1',
      }, {
        type: 'item1', guid: uuidv1(), text: 'item1_2',
      }, {
        type: 'item2', guid: uuidv1(), text: 'item2_1',
      }, {
        type: 'item3', guid: uuidv1(), text: 'item1_3',
      }];
      const service = related(aliasDefinition, definitions, existing);

      it('returns a random defined element', () => {
        const relatedElement: IRelatedElement = service.get({search: [{type: 'item1'}]});
        expect(relatedElement.results).to.not.be.undefined;
        expect(relatedElement.results!.length).to.eql(1);
        expect(relatedElement.results![0]).to.not.be.undefined;

        const item1: IElementDefinition = relatedElement.results![0] as IElementDefinition;
        expect(item1.related!.item2).to.not.be.undefined;

        const subject: IElementDefinition[] = item1.related!.item2.results! as IElementDefinition[];
        expect(subject.length).to.eql(2);
        R.forEach((element) => {
          expect(element.type).to.eql('item2');
          expect(element.text).to.be.oneOf(['item_2_1', 'item_2_2']);
        }, subject);
      });
    });
  });
});
