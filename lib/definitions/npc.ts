import { ERandomOption, IElementDefinition } from '../typings';

const npc: IElementDefinition = {
  type: 'npc',
  text: 'npc',
  options: [{
    type: 'npc',
    text: 'upperclass_male',
    related: {
      upperclass_male: {
        search: [{
          type: 'npc_upperclass_male',
        }],
      },
    },
  }, {
    type: 'npc',
    text: 'lowerclass_male',
    related: {
      lowerclass_male: {
        search: [{
          type: 'npc_lowerclass_male',
        }],
      },
    },
  }, {
    type: 'npc',
    text: 'upperclass_female',
    related: {
      upperclass_female: {
        search: [{
          type: 'npc_upperclass_female',
        }],
      },
    },
  }, {
    type: 'npc',
    text: 'lowerclass_female',
    related: {
      lowerclass_female: {
        search: [{
          type: 'npc_lowerclass_female',
        }],
      },
    },
  }],
};

const npcUpperclassMale: IElementDefinition = {
  type: 'npc_upperclass_male',
  text: 'npc_upperclass_male',
  related: {
    male_name: {
      search: [{
        type: 'male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'civilized_npc',
      }, {
        type: 'underground_npc',
      }],
    },
    asset: {
      search: [{
        type: 'npc_asset',
      }],
    },
    liability: {
      search: [{
        type: 'npc_liability',
      }],
    },
    misfortune: {
      search: [{
        type: 'npc_misfortune',
      }],
    },
    goal: {
      search: [{
        type: 'npc_goal',
      }],
    },
    method: {
      search: [{
        type: 'npc_reputation',
      }],
    },
    appearance: {
      search: [{
        type: 'appearance',
      }],
    },
    physical: {
      search: [{
        type: 'pj_physical',
      }],
    },
    clothes: {
      search: [{
        type: 'clothes',
      }],
    },
    personality: {
      search: [{
        type: 'personality',
      }],
    },
    mannerism: {
      search: [{
        type: 'mannerism',
      }],
    },
    background: {
      search: [{
        type: 'background',
      }],
    },
    secret: {
      search: [{
        type: 'npc_secret',
      }],
    },
    reputation: {
      search: [{
        type: 'npc_reputation',
      }],
    },
    relation: {
      search: [{
        type: 'npc_relation',
      }],
    },
    divinity_domain: {
      search: [{
        type: 'divinity_domain',
      }],
    },
  },
};

const npcLowerclassMale: IElementDefinition = {
  type: 'npc_lowerclass_male',
  text: 'npc_lowerclass_male',
  related: {
    male_name: {
      search: [{
        type: 'male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'civilized_npc',
      }, {
        type: 'underworld_npc',
      }, {
        type: 'wilderness_npc',
      }],
    },
    asset: {
      search: [{
        type: 'npc_asset',
      }],
    },
    liability: {
      search: [{
        type: 'npc_liability',
      }],
    },
    misfortune: {
      search: [{
        type: 'npc_misfortune',
      }],
    },
    goal: {
      search: [{
        type: 'npc_goal',
      }],
    },
    appearance: {
      search: [{
        type: 'appearance',
      }],
    },
    physical: {
      search: [{
        type: 'pj_physical',
      }],
    },
    clothes: {
      search: [{
        type: 'clothes',
      }],
    },
    personality: {
      search: [{
        type: 'personality',
      }],
    },
    mannerism: {
      search: [{
        type: 'mannerism',
      }],
    },
    background: {
      search: [{
        type: 'background',
      }],
    },
    secret: {
      search: [{
        type: 'npc_secret',
      }],
    },
    reputation: {
      search: [{
        type: 'npc_reputation',
      }],
    },
    relation: {
      search: [{
        type: 'npc_relation',
      }],
    },
    divinity_domain: {
      search: [{
        type: 'divinity_domain',
      }],
    },
  },
};

const npcUpperclassFemale: IElementDefinition = {
  type: 'npc_upperclass_female',
  text: 'npc_upperclass_female',
  related: {
    female_name: {
      search: [{
        type: 'female_name',
      }],
    },
    female_surname: {
      search: [{
        type: 'upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'civilized_npc',
      }, {
        type: 'wilderness_npc',
      }],
    },
    asset: {
      search: [{
        type: 'npc_asset',
      }],
    },
    liability: {
      search: [{
        type: 'npc_liability',
      }],
    },
    misfortune: {
      search: [{
        type: 'npc_misfortune',
      }],
    },
    goal: {
      search: [{
        type: 'npc_goal',
      }],
    },
    appearance: {
      search: [{
        type: 'appearance',
      }],
    },
    physical: {
      search: [{
        type: 'pj_physical',
      }],
    },
    clothes: {
      search: [{
        type: 'clothes',
      }],
    },
    personality: {
      search: [{
        type: 'personality',
      }],
    },
    mannerism: {
      search: [{
        type: 'mannerism',
      }],
    },
    background: {
      search: [{
        type: 'background',
      }],
    },
    secret: {
      search: [{
        type: 'npc_secret',
      }],
    },
    reputation: {
      search: [{
        type: 'npc_reputation',
      }],
    },
    relation: {
      search: [{
        type: 'npc_relation',
      }],
    },
    divinity_domain: {
      search: [{
        type: 'divinity_domain',
      }],
    },
  },
};

const npcLowerclassFemale: IElementDefinition = {
  type: 'npc_lowerclass_female',
  text: 'npc_lowerclass_female',
  related: {
    female_name: {
      search: [{
        type: 'female_name',
      }],
    },
    female_surname: {
      search: [{
        type: 'lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'civilized_npc',
      }, {
        type: 'underground_npc',
      }, {
        type: 'wilderness_npc',
      }],
    },
    asset: {
      search: [{
        type: 'npc_asset',
      }],
    },
    liability: {
      search: [{
        type: 'npc_liability',
      }],
    },
    misfortune: {
      search: [{
        type: 'npc_misfortune',
      }],
    },
    goal: {
      search: [{
        type: 'npc_goal',
      }],
    },
    appearance: {
      search: [{
        type: 'appearance',
      }],
    },
    physical: {
      search: [{
        type: 'pj_physical',
      }],
    },
    clothes: {
      search: [{
        type: 'clothes',
      }],
    },
    personality: {
      search: [{
        type: 'personality',
      }],
    },
    mannerism: {
      search: [{
        type: 'mannerism',
      }],
    },
    background: {
      search: [{
        type: 'background',
      }],
    },
    secret: {
      search: [{
        type: 'npc_secret',
      }],
    },
    reputation: {
      search: [{
        type: 'npc_reputation',
      }],
    },
    relation: {
      search: [{
        type: 'npc_relation',
      }],
    },
    divinity_domain: {
      search: [{
        type: 'divinity_domain',
      }],
    },
  },
};

const maleNames: IElementDefinition = {
  type: 'male_name',
  text: 'male_name',
  options: [{
    type: 'male_name',
    text: 'male_name_1',
  }, {
    type: 'male_name',
    text: 'male_name_2',
  }, {
    type: 'male_name',
    text: 'male_name_3',
  }, {
    type: 'male_name',
    text: 'male_name_4',
  }, {
    type: 'male_name',
    text: 'male_name_5',
  }, {
    type: 'male_name',
    text: 'male_name_6',
  }, {
    type: 'male_name',
    text: 'male_name_7',
  }, {
    type: 'male_name',
    text: 'male_name_8',
  }, {
    type: 'male_name',
    text: 'male_name_9',
  }, {
    type: 'male_name',
    text: 'male_name_10',
  }, {
    type: 'male_name',
    text: 'male_name_11',
  }, {
    type: 'male_name',
    text: 'male_name_12',
  }, {
    type: 'male_name',
    text: 'male_name_13',
  }, {
    type: 'male_name',
    text: 'male_name_14',
  }, {
    type: 'male_name',
    text: 'male_name_15',
  }, {
    type: 'male_name',
    text: 'male_name_16',
  }, {
    type: 'male_name',
    text: 'male_name_17',
  }, {
    type: 'male_name',
    text: 'male_name_18',
  }, {
    type: 'male_name',
    text: 'male_name_19',
  }, {
    type: 'male_name',
    text: 'male_name_20',
  }, {
    type: 'male_name',
    text: 'male_name_21',
  }, {
    type: 'male_name',
    text: 'male_name_22',
  }, {
    type: 'male_name',
    text: 'male_name_23',
  }, {
    type: 'male_name',
    text: 'male_name_24',
  }, {
    type: 'male_name',
    text: 'male_name_25',
  }, {
    type: 'male_name',
    text: 'male_name_26',
  }, {
    type: 'male_name',
    text: 'male_name_27',
  }, {
    type: 'male_name',
    text: 'male_name_28',
  }, {
    type: 'male_name',
    text: 'male_name_29',
  }, {
    type: 'male_name',
    text: 'male_name_30',
  }, {
    type: 'male_name',
    text: 'male_name_31',
  }, {
    type: 'male_name',
    text: 'male_name_32',
  }, {
    type: 'male_name',
    text: 'male_name_33',
  }, {
    type: 'male_name',
    text: 'male_name_34',
  }, {
    type: 'male_name',
    text: 'male_name_35',
  }, {
    type: 'male_name',
    text: 'male_name_36',
  }],
};

const femaleNames: IElementDefinition = {
  type: 'female_name',
  text: 'female_name',
  options: [{
    type: 'female_name',
    text: 'female_name_1',
  }, {
    type: 'female_name',
    text: 'female_name_2',
  }, {
    type: 'female_name',
    text: 'female_name_3',
  }, {
    type: 'female_name',
    text: 'female_name_4',
  }, {
    type: 'female_name',
    text: 'female_name_5',
  }, {
    type: 'female_name',
    text: 'female_name_6',
  }, {
    type: 'female_name',
    text: 'female_name_7',
  }, {
    type: 'female_name',
    text: 'female_name_8',
  }, {
    type: 'female_name',
    text: 'female_name_9',
  }, {
    type: 'female_name',
    text: 'female_name_10',
  }, {
    type: 'female_name',
    text: 'female_name_11',
  }, {
    type: 'female_name',
    text: 'female_name_12',
  }, {
    type: 'female_name',
    text: 'female_name_13',
  }, {
    type: 'female_name',
    text: 'female_name_14',
  }, {
    type: 'female_name',
    text: 'female_name_15',
  }, {
    type: 'female_name',
    text: 'female_name_16',
  }, {
    type: 'female_name',
    text: 'female_name_17',
  }, {
    type: 'female_name',
    text: 'female_name_18',
  }, {
    type: 'female_name',
    text: 'female_name_19',
  }, {
    type: 'female_name',
    text: 'female_name_20',
  }, {
    type: 'female_name',
    text: 'female_name_21',
  }, {
    type: 'female_name',
    text: 'female_name_22',
  }, {
    type: 'female_name',
    text: 'female_name_23',
  }, {
    type: 'female_name',
    text: 'female_name_24',
  }, {
    type: 'female_name',
    text: 'female_name_25',
  }, {
    type: 'female_name',
    text: 'female_name_26',
  }, {
    type: 'female_name',
    text: 'female_name_27',
  }, {
    type: 'female_name',
    text: 'female_name_28',
  }, {
    type: 'female_name',
    text: 'female_name_29',
  }, {
    type: 'female_name',
    text: 'female_name_30',
  }, {
    type: 'female_name',
    text: 'female_name_31',
  }, {
    type: 'female_name',
    text: 'female_name_32',
  }, {
    type: 'female_name',
    text: 'female_name_33',
  }, {
    type: 'female_name',
    text: 'female_name_34',
  }, {
    type: 'female_name',
    text: 'female_name_35',
  }, {
    type: 'female_name',
    text: 'female_name_36',
  }],
};

const upperclassSurname: IElementDefinition = {
  type: 'upperclass_surname',
  text: 'upperclass_surname',
  options: [{
    type: 'upperclass_surname',
    text: 'upperclass_surname_1',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_2',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_3',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_4',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_5',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_6',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_7',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_8',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_9',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_10',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_11',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_12',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_13',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_14',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_15',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_16',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_17',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_18',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_19',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_20',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_21',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_22',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_23',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_24',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_25',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_26',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_27',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_28',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_29',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_30',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_31',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_32',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_33',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_34',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_35',
  }, {
    type: 'upperclass_surname',
    text: 'upperclass_surname_36',
  }],
};

const lowerclassSurname: IElementDefinition = {
  type: 'lowerclass_surname',
  text: 'lowerclass_surname',
  options: [{
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_1',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_2',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_3',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_4',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_5',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_6',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_7',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_8',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_9',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_10',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_11',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_12',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_13',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_14',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_15',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_16',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_17',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_18',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_19',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_20',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_21',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_22',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_23',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_24',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_25',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_26',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_27',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_28',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_29',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_30',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_31',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_32',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_33',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_34',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_35',
  }, {
    type: 'lowerclass_surname',
    text: 'lowerclass_surname_36',
  }],
};

const npcGoal: IElementDefinition = {
  type: 'npc_goal',
  text: 'npc_goal',
  options: [{
    type: 'npc_goal',
    text: 'npc_goal_1',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_2',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_3',
    related: { item: { search: [{ type: 'item', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_4',
    related: { item: { search: [{ type: 'item', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_5',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_6',
    related: { item: { search: [{type: 'item', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_7',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_8',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_9',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_10',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_11',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_12',
    related: { npc: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_13',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_14',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_15',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_16',
    related: { npc: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_17',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_18',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_19',
    related: { npc: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_20',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_21',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_22',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_23',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_24',
    related: { npc: { search: [{type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_25',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_26',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_27',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_28',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_29',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_30',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_31',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_32',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_goal',
    text: 'npc_goal_33',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_34',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_35',
  }, {
    type: 'npc_goal',
    text: 'npc_goal_36',
  }],
};

const civilizedNpc: IElementDefinition = {
  type: 'civilized_npc',
  text: 'civilized_npc',
  options: [{
    type: 'civilized_npc',
    text: 'civilized_npc_1',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_2',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_3',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_4',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_5',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_6',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_7',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_8',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_9',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_10',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_11',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_12',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_13',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_14',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_15',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_16',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_17',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_18',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_19',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_20',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_21',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_22',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_23',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_24',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_25',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_26',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_27',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_28',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_29',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_30',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_31',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_32',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_33',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_34',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_35',
  }, {
    type: 'civilized_npc',
    text: 'civilized_npc_36',
  }],
};

const underworldNpc: IElementDefinition = {
  type: 'underworld_npc',
  text: 'underworld_npc',
  options: [{
    type: 'underworld_npc',
    text: 'underworld_npc_1',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_2',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_3',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_4',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_5',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_6',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_7',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_8',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_9',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_10',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_11',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_12',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_13',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_14',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_15',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_16',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_17',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_18',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_19',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_20',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_21',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_22',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_23',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_24',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_25',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_26',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_27',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_28',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_29',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_30',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_31',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_32',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_33',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_34',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_35',
  }, {
    type: 'underworld_npc',
    text: 'underworld_npc_36',
  }],
};

const wildernessNpc: IElementDefinition = {
  type: 'wilderness_npc',
  text: 'wilderness_npc',
  options: [{
    type: 'wilderness_npc',
    text: 'wilderness_npc_1',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_2',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_3',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_4',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_5',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_6',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_7',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_8',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_9',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_10',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_11',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_12',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_13',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_14',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_15',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_16',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_17',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_18',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_19',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_20',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_21',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_22',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_23',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_24',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_25',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_26',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_27',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_28',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_29',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_30',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_31',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_32',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_33',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_34',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_35',
  }, {
    type: 'wilderness_npc',
    text: 'wilderness_npc_36',
  }],
};

const npcAsset: IElementDefinition = {
  type: 'npc_asset',
  text: 'npc_asset',
  options: [{
    type: 'npc_asset',
    text: 'npc_asset_1',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_2',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_3',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_4',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_5',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_6',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_7',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_8',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_9',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_asset',
    text: 'npc_asset_10',
    related: { faction: { search: [{ type: 'faction', random: ERandomOption.all }] } },
  }, {
    type: 'npc_asset',
    text: 'npc_asset_11',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_12',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_13',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_14',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_15',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_16',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_17',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_18',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_19',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_20',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_21',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_22',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_23',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_24',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_25',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_26',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_27',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_28',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_29',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_30',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_31',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_32',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_33',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_34',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_35',
  }, {
    type: 'npc_asset',
    text: 'npc_asset_36',
  }],
};

const npcLiability: IElementDefinition = {
  type: 'npc_liability',
  text: 'npc_liability',
  options: [{
    type: 'npc_liability',
    text: 'npc_liability_1',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_2',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_3',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_4',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_5',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_6',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_7',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_8',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_9',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_10',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_11',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_12',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_13',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_14',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_15',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_16',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_17',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_18',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_19',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_20',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_21',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_22',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_23',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_24',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_25',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_26',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_27',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_28',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_29',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_30',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_31',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_32',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_33',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_34',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_35',
  }, {
    type: 'npc_liability',
    text: 'npc_liability_36',
  }],
};

const npcMisfortune: IElementDefinition = {
  type: 'npc_misfortune',
  text: 'npc_misfortune',
  options: [{
    type: 'npc_misfortune',
    text: 'npc_misfortune_1',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_2',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_3',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_4',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_5',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_6',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_7',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_8',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_9',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_10',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_11',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_12',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_13',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_14',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_15',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_16',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_17',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_18',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_19',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_20',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_21',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_22',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_23',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_24',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_25',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_26',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_27',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_28',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_29',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_30',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_31',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_32',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_33',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_34',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_35',
  }, {
    type: 'npc_misfortune',
    text: 'npc_misfortune_36',
  }],
};

const mission: IElementDefinition = {
  type: 'mission',
  text: 'mission',
  options: [{
    type: 'mission',
    text: 'mission_1',
  }, {
    type: 'mission',
    text: 'mission_2',
  }, {
    type: 'mission',
    text: 'mission_3',
  }, {
    type: 'mission',
    text: 'mission_4',
  }, {
    type: 'mission',
    text: 'mission_5',
  }, {
    type: 'mission',
    text: 'mission_6',
  }, {
    type: 'mission',
    text: 'mission_7',
  }, {
    type: 'mission',
    text: 'mission_8',
  }, {
    type: 'mission',
    text: 'mission_9',
  }, {
    type: 'mission',
    text: 'mission_10',
  }, {
    type: 'mission',
    text: 'mission_11',
  }, {
    type: 'mission',
    text: 'mission_12',
  }, {
    type: 'mission',
    text: 'mission_13',
  }, {
    type: 'mission',
    text: 'mission_14',
  }, {
    type: 'mission',
    text: 'mission_15',
  }, {
    type: 'mission',
    text: 'mission_16',
  }, {
    type: 'mission',
    text: 'mission_17',
  }, {
    type: 'mission',
    text: 'mission_18',
  }, {
    type: 'mission',
    text: 'mission_19',
  }, {
    type: 'mission',
    text: 'mission_20',
  }, {
    type: 'mission',
    text: 'mission_21',
  }, {
    type: 'mission',
    text: 'mission_22',
  }, {
    type: 'mission',
    text: 'mission_23',
  }, {
    type: 'mission',
    text: 'mission_24',
  }, {
    type: 'mission',
    text: 'mission_25',
  }, {
    type: 'mission',
    text: 'mission_26',
  }, {
    type: 'mission',
    text: 'mission_27',
  }, {
    type: 'mission',
    text: 'mission_28',
  }, {
    type: 'mission',
    text: 'mission_29',
  }, {
    type: 'mission',
    text: 'mission_30',
  }, {
    type: 'mission',
    text: 'mission_31',
  }, {
    type: 'mission',
    text: 'mission_32',
  }, {
    type: 'mission',
    text: 'mission_33',
  }, {
    type: 'mission',
    text: 'mission_34',
  }, {
    type: 'mission',
    text: 'mission_35',
  }, {
    type: 'mission',
    text: 'mission_36',
  }],
};

const npcMethod: IElementDefinition = {
  type: 'npc_reputation',
  text: 'npc_reputation',
  options: [{
    type: 'npc_reputation',
    text: 'npc_reputation_1',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_2',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_3',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_4',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_5',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_6',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_7',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_8',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_9',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_10',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_11',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_12',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_13',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_14',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_15',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_16',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_17',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_18',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_19',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_20',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_21',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_22',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_23',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_24',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_25',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_26',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_27',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_28',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_29',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_30',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_31',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_32',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_33',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_34',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_35',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_36',
  }],
};

const npcSecret: IElementDefinition = {
  type: 'npc_secret',
  text: 'npc_secret',
  options: [{
    type: 'npc_secret',
    text: 'npc_secret_1',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_2',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_3',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_4',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_5',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_6',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_7',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_8',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_9',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_10',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_11',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_12',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_13',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_14',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_15',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_16',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_17',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_18',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_19',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_20',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_21',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_22',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_23',
    related: { misfortune: { search: [{ type: 'npc_misfortune' }] } },
  }, {
    type: 'npc_secret',
    text: 'npc_secret_24',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_25',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_26',
    related: { npc: { search: [{ type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'npc_secret',
    text: 'npc_secret_27',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_28',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_29',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_30',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_31',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_32',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_33',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_34',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_35',
  }, {
    type: 'npc_secret',
    text: 'npc_secret_36',
  }],
};

const npcReputation: IElementDefinition = {
  type: 'npc_reputation',
  text: 'npc_reputation',
  options: [{
    type: 'npc_reputation',
    text: 'npc_reputation_1',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_2',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_3',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_4',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_5',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_6',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_7',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_8',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_9',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_10',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_11',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_12',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_13',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_14',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_15',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_16',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_17',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_18',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_19',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_20',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_21',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_22',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_23',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_24',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_25',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_26',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_27',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_28',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_29',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_30',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_31',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_32',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_33',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_34',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_35',
  }, {
    type: 'npc_reputation',
    text: 'npc_reputation_36',
  }],
};

const npcRelation: IElementDefinition = {
  type: 'npc_relation',
  text: 'npc_relation',
  options: [{
    type: 'npc_relation',
    text: 'npc_relation_1',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_2',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_3',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_4',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_5',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_6',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_7',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_8',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_9',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_10',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_11',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_12',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_13',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_14',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_15',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_16',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_17',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_18',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_19',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_20',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_21',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_22',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_23',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_24',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_25',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_26',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_27',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_28',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_29',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_30',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_31',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_32',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_33',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_34',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_35',
  }, {
    type: 'npc_relation',
    text: 'npc_relation_36',
  }],
};

const divinityDomain: IElementDefinition = {
  type: 'divinity_domain',
  text: 'divinity_domain',
  options: [{
    type: 'divinity_domain',
    text: 'divinity_domain_1',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_2',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_3',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_4',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_5',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_6',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_7',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_8',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_9',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_10',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_11',
    related: { element: { search: [{ type: 'element' }] } },
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_12',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_13',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_14',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_15',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_16',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_17',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_18',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_19',
    related: { npc: { search: [{ type: 'npc', random: ERandomOption.all }] } },
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_20',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_21',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_22',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_23',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_24',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_25',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_26',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_27',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_28',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_29',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_30',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_31',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_32',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_33',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_34',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_35',
  }, {
    type: 'divinity_domain',
    text: 'divinity_domain_36',
  }],
};

export {
  npc,
  npcUpperclassMale,
  npcUpperclassFemale,
  npcLowerclassMale,
  npcLowerclassFemale,
  femaleNames,
  maleNames,
  upperclassSurname,
  lowerclassSurname,
  npcGoal,
  civilizedNpc,
  wildernessNpc,
  underworldNpc,
  npcAsset,
  npcLiability,
  npcMisfortune,
  npcMethod,
  npcSecret,
  npcReputation,
  npcRelation,
  mission,
  divinityDomain,
};
