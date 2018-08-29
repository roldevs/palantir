import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrCityBuilding: IElementDefinition = {
  type: 'mr_city_building',
  text: 'mr_city_building',
  options: [{
    type: 'mr_city_building',
    text: 'mr_city_lowerclass_building',
    related: {
      city_lowerclass_building: { search: [{ type: 'mr_city_lowerclass_building' }] },
    },
  }, {
    type: 'mr_city_building',
    text: 'mr_city_upperclass_building',
    related: {
      city_upperclass_building: { search: [{ type: 'mr_city_upperclass_building' }] },
    },
  }],
};

const mrCityTheme: IElementDefinition = apRegularDefinition('mr_city_theme', 36)([
  {
    index: 1,
    related: { animal: { search: [{ type: 'mr_animal' }] } },
  }, {
    index: 7,
    related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
  }, {
    index: 8,
    related: { city_event: { search: [{ type: 'mr_city_event' }] } },
  }, {
    index: 11,
    related: { city_district_theme: { search: [{ type: 'mr_city_district_theme' }] } },
  }, {
    index: 12,
    related: { divinity_domain: { search: [{ type: 'mr_divinity_domain' }] } },
  }, {
    index: 13,
    related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
  }, {
    index: 17,
    related: { city_lowerclass_building: { search: [{ type: 'mr_city_lowerclass_building' }] } },
  }, {
    index: 20,
    related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
  }, {
    index: 22,
    related: { physical_element: { search: [{ type: 'mr_physical_element' }] } },
  }, {
    index: 34,
    related: { city_uperclass_building: { search: [{ type: 'mr_city_upperclass_building' }] } },
  },
]);

const mrCityEvent: IElementDefinition = apRegularDefinition('mr_city_event', 36)([{
  index: 10,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}]);

const mrCityDistrictTheme: IElementDefinition = apRegularDefinition('mr_city_district_theme', 36)([{
  index: 2,
  related: { npc_civilized: { search: [{ type: 'mr_npc_civilized', random: ERandomOption.all }] } },
}, {
  index: 30,
  related: { npc_underworld: { search: [{ type: 'mr_npc_underworld', random: ERandomOption.all }] } },
}, {
  index: 31,
  related: { city_upperclass_building: { search: [{ type: 'mr_city_upperclass_building' }] } },
}, {
  index: 32,
  related: { city_lowerclass_building: { search: [{ type: 'mr_city_lowerclass_building' }] } },
}, {
  index: 34,
  related: { npc_wilderness: { search: [{ type: 'mr_npc_wilderness', random: ERandomOption.all }] } },
}]);

const mrCityUpperclassBuilding: IElementDefinition = regularDefinition('mr_city_upperclass_building', 36);

const mrCityLowerclassBuilding: IElementDefinition = regularDefinition('mr_city_lowerclass_building', 36);

const mrCityActivity: IElementDefinition = apRegularDefinition('mr_city_activity', 36)([{
  index: 17,
  related: { dungeon_activity: { search: [{ type: 'mr_dungeon_activity' }] } },
}, {
  index: 20,
  related: { mission: { search: [{ type: 'mr_mission' }] } },
}, {
  index: 36,
  related: { wild_activity: { search: [{ type: 'mr_wild_activity' }] } },
}]);

const mrCityBuildingRoom: IElementDefinition = apRegularDefinition('mr_city_building_room', 36)([{
  index: 13,
  related: { dungeon_room: { search: [{ type: 'mr_dungeon_room' }] } },
}]);

const mrCityTacticalStreetFeature: IElementDefinition = apRegularDefinition('mr_city_tactical_street_feature', 36)([{
  index: 9,
  related: { city_activity: { search: [{ type: 'mr_city_activity' }] } },
}, {
  index: 16,
  related: { dungeon_activity: { search: [{ type: 'mr_dungeon_activity' }] } },
}, {
  index: 30,
  related: { wild_activity: { search: [{ type: 'mr_wild_activity' }] } },
}]);

const mrCityTacticalBuildingFeature: IElementDefinition
= apRegularDefinition('mr_city_tactical_building_feature', 36)([{
  index: 1,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}]);

export {
  mrCityTheme,
  mrCityEvent,
  mrCityDistrictTheme,
  mrCityBuilding,
  mrCityUpperclassBuilding,
  mrCityLowerclassBuilding,
  mrCityActivity,
  mrCityBuildingRoom,
  mrCityTacticalStreetFeature,
  mrCityTacticalBuildingFeature,
};
