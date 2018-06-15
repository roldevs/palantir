import { ERandomOption, IElementDefinition } from '../typings';

const npc: IElementDefinition = {
  type: 'npc',
  text: 'npc',
  related: {
    female_name: {
      search: [{
        type: 'npc_female_name',
      }],
    },
    goal: {
      search: [{
        type: 'npc_goals',
      }],
    },
  },
};

const npcFemaleNames: IElementDefinition = {
  type: 'npc_female_name',
  text: 'npc_female_name',
  options: [{
    type: 'npc_female_name',
    text: 'npc_female_name_1',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_2',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_3',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_4',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_5',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_6',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_7',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_8',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_9',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_10',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_11',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_12',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_13',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_14',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_15',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_16',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_17',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_18',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_19',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_20',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_21',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_22',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_23',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_24',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_25',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_26',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_27',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_28',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_29',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_30',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_31',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_32',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_33',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_34',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_35',
  }, {
    type: 'npc_female_name',
    text: 'npc_female_name_36',
  }],
};

const npcGoalsDef: IElementDefinition = {
  type: 'npc_goals',
  text: 'npc_goals',
  options: [{
    type: 'npc_goals',
    text: 'npc_goals_a_better_life',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_acceptance',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_acquire_item',
    related: { item: { search: [{ type: 'item' }] } },
  }, {
    type: 'npc_goals',
    text: 'npc_goals_craft_item',
    related: { item: { search: [{ type: 'item' }] } },
  }, {
    type: 'npc_goals',
    text: 'npc_goals_destroy_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_destroy_item',
    related: { item: { search: [{type: 'item' }] } },
  }, {
    type: 'npc_goals',
    text: 'npc_goals_locate',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_love',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_mastery',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_power',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_reach_location',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_rescue_npc',
    related: { item: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goals',
    text: 'npc_goals_enlighntment',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_fame',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_found_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_glory',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_impress_npc',
    related: { item: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goals',
    text: 'npc_goals_resolve_dispute',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_restore_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_reveal_secret',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_revenge',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_sabotage_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_serve_deity',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_infamy',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_infiltrate_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_justice',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_kidnap_npc',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_lead_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_learning',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_serve_evil',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_serve_faction',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_serve_ideology',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_serve_leader',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_needy',
  }, {
    type: 'npc_goals',
    text: 'npc_goals_wealth',
  }],
};

export {
  npc,
  npcFemaleNames,
  npcGoalsDef,
};
