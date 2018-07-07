/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import related from '../../lib/related';
import {
  IAliasDefinition,
  IElement,
  IElementDefinition,
} from '../../lib/typings';

describe('Related#getOne recursive related', () => {
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
        const subject: IElementDefinition = service.getOne([{type: 'npc'}]);

        expect(subject.related).to.not.be.undefined;

        const resultName: Array<IElementDefinition | IElement> = subject.related!.name.results!;
        const resultGoal: any = subject.related!.goal.results!;

        expect(resultName[0]).to.not.be.undefined;
        expect(resultName[0].type).to.eql('name');
        expect(resultName[0].text).to.be.oneOf(['Juan', 'Ernesto']);

        expect(resultGoal[0]).to.not.be.undefined;
        expect(resultGoal[0].type).to.eql('goal');
        expect(resultGoal[0].text).to.eql('change_name');

        const resultGoalName: any = resultGoal[0].related!.name.results!;

        expect(resultGoalName[0].type).to.eql('name');
        expect(resultGoalName[0].text).to.be.oneOf(['Juan', 'Ernesto']);
      });
    });
  });
});
