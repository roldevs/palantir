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
import {
  pj,
  pjAppearance,
  pjBackground,
  pjClothes,
  pjMannerism,
  pjPersonality,
  pjPhysical,
} from './pj';

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
    pj,
    pjAppearance,
    pjBackground,
    pjClothes,
    pjMannerism,
    pjPersonality,
    pjPhysical,
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
