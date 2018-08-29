import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrInn: IElementDefinition = {
  type: 'mr_inn',
  text: 'mr_inn',
  related: {
    adjective: { search: [{ type: 'mr_inn_adjective' }] },
    name: { search: [{ type: 'mr_inn_name' }] },
    quirk: { search: [{ type: 'mr_inn_quirk' }] },
  },
};

const mrInnAdjective: IElementDefinition = regularDefinition('mr_inn_adjective', 36);
const mrInnName: IElementDefinition = regularDefinition('mr_inn_name', 36);

const mrInnQuirk: IElementDefinition = apRegularDefinition('mr_inn_quirk', 36)([{
  index: 9,
  related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
}, {
  index: 13,
  related: { dungeon_layout: { search: [{ type: 'mr_dungeon_layout' }] } },
}, {
  index: 15,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 16,
  related: { faction_trait: { search: [{ type: 'mr_faction_trait' }] } },
}, {
  index: 24,
  related: { city_building: { search: [{ type: 'mr_city_building' }] } },
}, {
  index: 28,
  related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
}]);

export {
  mrInn,
  mrInnAdjective,
  mrInnName,
  mrInnQuirk,
};
