/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import related from '../../lib/related';
import {
  IAliasDefinition,
  IElement,
  IElementDefinition,
} from '../../lib/typings';

describe('Related#get recursive related', () => {
  describe('without alias', () => {
    const aliasDefinition: IAliasDefinition = {};
    const guid: string = uuidv1();
    describe('related', () => {
      const definitions: IElementDefinition[] = [{
        type: 'npc',
        text: 'npc',
        related: {
          name: {
            search: [{
              type: 'name',
            }],
          },
          goal: {
            search: [{
              type: 'goal',
            }],
          },
        },
      }, {
        type: 'name',
        text: 'name',
        options: [{
          type: 'name',
          text: 'Juan',
        }, {
          type: 'name',
          text: 'Ernesto',
        }],
      }, {
        type: 'goal',
        text: 'goal',
        options: [{
          type: 'goal',
          text: 'change_name',
          related: {
            name: {
              search: [{
                type: 'name',
              }],
            },
          },
        }],
      }];
      const service = related(aliasDefinition, definitions, []);

      it('get related only element', () => {
        const subject: IElementDefinition = service.get([{type: 'npc'}]);

        expect(subject.related).to.not.be.undefined;

        const resultName: IElement | IElementDefinition = subject.related!.name.result!;
        const resultGoal: any = subject.related!.goal.result!;

        expect(resultName).to.not.be.undefined;
        expect(resultName.type).to.eql('name');
        expect(resultName.text).to.be.oneOf(['Juan', 'Ernesto']);

        expect(resultGoal).to.not.be.undefined;
        expect(resultGoal.type).to.eql('goal');
        expect(resultGoal.text).to.eql('change_name');

        const resultGoalName: any = resultGoal.related!.name.result!;

        expect(resultGoalName.type).to.eql('name');
        expect(resultGoalName.text).to.be.oneOf(['Juan', 'Ernesto']);
      });
    });
  });
});
