import { IElementDefinition, IWorldDefinition } from '../typings';
import { 
  miscellaneousItemsDef,
  wornItemsDef,
  weaponItemsDef,
  toolItemsDef,
  treasureItemsDef
} from './items';
import { 
  npcGoalsDef
} from './npc';

export const worldDefinition: IWorldDefinition = {
  definitions: [
    miscellaneousItemsDef,
    wornItemsDef,
    weaponItemsDef,
    toolItemsDef,
    treasureItemsDef,
    npcGoalsDef      
  ],
  alias: {
    items: [
      'miscellaneous_items',
      'worn_items',
      'weapon_items',
      'tool_items',
      'treasure_items',
    ]
  },
  existing: []
};
