import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrDungeon: IElementDefinition = {
  type: 'mr_dungeon',
  text: 'mr_dungeon',
  related: {
    entrance: { search: [{ type: 'mr_dungeon_entrance'}] },
    form: { search: [{ type: 'mr_dungeon_form'}] },
    layout: { search: [{ type: 'mr_dungeon_layout'}] },
    ruination: { search: [{ type: 'mr_dungeon_ruination'}] },
    reward: { search: [{ type: 'mr_dungeon_reward'}] },
    tirck: { search: [{ type: 'mr_dungeon_trick'}] },
  },
};

const mrDungeonEntrance: IElementDefinition = regularDefinition('mr_dungeon_entrance', 36);
const mrDungeonLayout: IElementDefinition = regularDefinition('mr_dungeon_layout', 36);
const mrDungeonForm: IElementDefinition = apRegularDefinition('mr_dungeon_form', 36)([{
  index: 13,
  related: { city_building_room: { search: [{ type: 'mr_city_building_room' }] } },
}, {
  index: 17,
  related: { city_lowerclass_building: { search: [{ type: 'mr_city_lowerclass_building' }] } },
}, {
  index: 18,
  related: { dungeon_room: { search: [{ type: 'mr_dungeon_room' }] } },
}, {
  index: 32,
  related: { city_upperclass_building: { search: [{ type: 'mr_city_upperclass_building' }] } },
}]);

const mrDungeonRuination: IElementDefinition = apRegularDefinition('mr_dungeon_ruination', 36)([{
  index: 20,
  related: { insanity: { search: [{ type: 'mr_insanity' }] } },
}, {
  index: 25,
  related: { mutation: { search: [{ type: 'mr_mutation' }] } },
}]);

const mrDungeonReward: IElementDefinition = apRegularDefinition('mr_dungeon_reward', 36)([{
  index: 8,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 12,
  related: { item: { search: [{ type: 'mr_item' }] } },
}, {
  index: 21,
  related: { monster: { search: [{ type: 'mr_monster' }] } },
}, {
  index: 30,
  related: { treasure: { search: [{ type: 'mr_treasure' }] } },
}, {
  index: 32,
  related: { valuable_material: { search: [{ type: 'mr_valuable_material' }] } },
}]);

const mrDungeonTrick: IElementDefinition = apRegularDefinition('mr_dungeon_trick', 36)([{
  index: 12,
  related: { ethereal_effect: { search: [{ type: 'mr_ethereal_effect' }] } },
}, {
  index: 18,
  related: { mission: { search: [{ type: 'mr_mission' }] } },
}, {
  index: 21,
  related: { physical_effect: { search: [{ type: 'mr_physical_effect' }] } },
}]);

const mrDungeonRoom: IElementDefinition = apRegularDefinition('mr_dungeon_room', 36)([{
  index: 4,
  related: { city_building_room: { search: [{ type: 'mr_city_building_room' }] } },
}, {
  index: 17,
  related: { city_lowerclass_building: { search: [{ type: 'mr_city_lowerclass_building' }] } },
}, {
  index: 33,
  related: { city_upperclass_building: { search: [{ type: 'mr_city_upperclass_building' }] } },
}]);

const mrDungeonActivity: IElementDefinition = apRegularDefinition('mr_dungeon_activity', 36)([{
  index: 3,
  related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
}, {
  index: 15,
  related: { monster_tactic: { search: [{ type: 'mr_monster_tactic' }] } },
}, {
  index: 32,
  related: { wild_activity: { search: [{ type: 'mr_wild_activity' }] } },
}]);

const mrDungeonRoomDetail: IElementDefinition = regularDefinition('mr_dungeon_room_detail', 36);
const mrDungeonHazard: IElementDefinition = regularDefinition('mr_dungeon_hazard', 36);

export {
  mrDungeon,
  mrDungeonEntrance,
  mrDungeonForm,
  mrDungeonLayout,
  mrDungeonRuination,
  mrDungeonReward,
  mrDungeonTrick,
  mrDungeonRoom,
  mrDungeonRoomDetail,
  mrDungeonHazard,
  mrDungeonActivity,
};
