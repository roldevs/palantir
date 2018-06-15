import { IWorldDefinition } from '../typings';
import {
  miscellaneousItemsDef,
  toolItemsDef,
  treasureItemsDef,
  weaponItemsDef,
  wornItemsDef,
} from './items';
import {
  npc,
  npcFemaleNames,
  npcGoalsDef,
} from './npc';

export const worldDefinition: IWorldDefinition = {
  definitions: [
    miscellaneousItemsDef,
    wornItemsDef,
    weaponItemsDef,
    toolItemsDef,
    treasureItemsDef,
    npc,
    npcFemaleNames,
    npcGoalsDef,
    ],
  alias: {
    item: [
      'miscellaneous_items',
      'worn_items',
      'weapon_items',
      'tool_items',
      'treasure_items',
    ],
  },
  existing: [],
};
