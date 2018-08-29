import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const  mrFaction: IElementDefinition = {
  type: 'mr_faction',
  text: 'mr_faction',
  related: {
    type: { search: [{ type: 'mr_faction_type'}] },
    trait: { search: [{ type: 'mr_faction_trait'}] },
    goal: { search: [{ type: 'mr_faction_goal'}] },
  },
};

const mrFactionType: IElementDefinition = regularDefinition('mr_faction_type', 36);

const mrFactionTrait: IElementDefinition = apRegularDefinition('mr_faction_trait', 36)([{
  index: 22,
  related: { personality: { search: [{ type: 'mr_personality' }] } },
}]);

const mrFactionGoal: IElementDefinition = apRegularDefinition('mr_faction_goal', 36)([{
  index: 9,
  related: { monster: { search: [{ type: 'mr_monster' }] } },
}, {
  index: 10,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 18,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 34,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}]);

export {
  mrFaction,
  mrFactionGoal,
  mrFactionTrait,
  mrFactionType,
};
