import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrWildRegion: IElementDefinition = regularDefinition('mr_wild_region', 36);
const mrWildLandmark: IElementDefinition = regularDefinition('mr_wild_landmark', 36);
const mrWildStructure: IElementDefinition = regularDefinition('mr_wild_structure', 36);
const mrWildTrait: IElementDefinition = apRegularDefinition('mr_wild_trait', 36)([{
  index: 9,
  related: { dungeon_ruination: { search: [{ type: 'mr_dungeon_ruination' }] } },
}, {
  index: 11,
  related: { ethereal_effect: { search: [{ type: 'mr_ethereal_effect' }] } },
}, {
  index: 34,
  related: { physical_effect: { search: [{ type: 'mr_physical_effect' }] } },
}]);

const mrWildDiscovery: IElementDefinition = apRegularDefinition('mr_wild_discovery', 36)([{
  index: 5,
  related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
}, {
  index: 6,
  related: { npc_civilized: { search: [{ type: 'mr_npc_civilized' }] } },
}, {
  index: 9,
  related: { dungeon_activty: { search: [{ type: 'mr_dungeon_activty' }] } },
}, {
  index: 13,
  related: { item: { search: [{ type: 'mr_item' }] } },
}, {
  index: 14,
  related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 19,
  related: { mutation: { search: [{ type: 'mr_mutation' }] } },
}, {
  index: 25,
  related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 31,
  related: { npc_underworld: { search: [{ type: 'mr_npc_underworld' }] } },
}, {
  index: 32,
  related: { wild_landmark: { search: [{ type: 'mr_wild_landmark' }] } },
}, {
  index: 33,
  related: { wild_structure: { search: [{ type: 'mr_wild_structure' }] } },
}, {
  index: 34,
  related: { npc_wilderness: { search: [{ type: 'mr_npc_wilderness' }] } },
}, {
  index: 35,
  related: { wild_activity: { search: [{ type: 'mr_wild_activity' }] } },
}]);

const mrWildActivity: IElementDefinition = apRegularDefinition('mr_wild_activity', 36)([{
  index: 7,
  related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
}, {
  index: 12,
  related: { dungeon_activity: { search: [{ type: 'mr_dungeon_activity' }] } },
}]);

const mrWildHazard: IElementDefinition = regularDefinition('mr_wild_hazard', 36);

export {
  mrWildActivity,
  mrWildDiscovery,
  mrWildHazard,
  mrWildLandmark,
  mrWildRegion,
  mrWildStructure,
  mrWildTrait,
};
