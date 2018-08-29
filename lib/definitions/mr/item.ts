import { IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrMiscellaneousItem: IElementDefinition = regularDefinition('mr_miscellaneous_item', 36);
const mrWornItem: IElementDefinition = regularDefinition('mr_worn_item', 36);
const mrWeaponItem: IElementDefinition = regularDefinition('mr_weapon_item', 36);
const mrToolItem: IElementDefinition = regularDefinition('mr_tool_item', 36);

const mrTreasure: IElementDefinition = {
  type: 'mr_treasure',
  text: 'mr_treasure',
  related: {
    item: { search: [{ type: 'mr_treasure_item' }] },
    trait: { search: [{ type: 'mr_treasure_trait' }] },
  },
};

const mrTreasureItem: IElementDefinition = regularDefinition('mr_treasure_item', 36);
const mrValuableMaterial: IElementDefinition = regularDefinition('mr_valuable_material', 36);
const mrTreasureTrait: IElementDefinition = apRegularDefinition('mr_treasure_trait', 36)([{
  index: 12,
  related: { effects: { search: [{ type: 'mr_effects' }] } },
}, {
  index: 13,
  related: { element: { search: [{ type: 'mr_element' }] } },
}]);

const mrBookTheme: IElementDefinition = regularDefinition('mr_book_theme', 36);

export {
  mrMiscellaneousItem,
  mrWornItem,
  mrWeaponItem,
  mrToolItem,
  mrTreasure,
  mrTreasureItem,
  mrTreasureTrait,
  mrValuableMaterial,
  mrBookTheme,
};
