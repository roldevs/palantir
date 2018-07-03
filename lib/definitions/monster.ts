import { ERandomOption, IElementDefinition } from '../typings';

const monster: IElementDefinition = {
  type: 'monster',
  text: 'monster',
  related: {
    feature: {
      search: [{
        type: 'monster_feature',
        random: ERandomOption.random,
      }],
    },
    trait: {
      search: [{
        type: 'monster_trait',
        random: ERandomOption.random,
      }],
    },
    ability: {
      search: [{
        type: 'monster_ability',
        random: ERandomOption.random,
      }],
    },
    tactic: {
      search: [{
        type: 'monster_tactic',
        random: ERandomOption.random,
      }],
    },
    personality: {
      search: [{
        type: 'monster_personality',
        random: ERandomOption.random,
      }],
    },
  },
};

const monsterFeature: IElementDefinition = {
  type: 'monster_feature',
  text: 'monster_feature',
  options: [{
    type: 'monster_feature',
    text: 'monster_feature_1',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_2',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_3',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_4',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_5',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_6',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_7',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_8',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_9',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_10',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_11',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_12',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_13',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_14',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_15',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_16',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_17',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_18',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_19',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_20',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_21',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_22',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_23',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_24',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_25',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_26',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_27',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_28',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_29',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_30',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_31',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_32',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_33',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_34',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_35',
  }, {
    type: 'monster_feature',
    text: 'monster_feature_36',
  }],
};

const monsterTrait: IElementDefinition = {
  type: 'monster_trait',
  text: 'monster_trait',
  options: [{
    type: 'monster_trait',
    text: 'monster_trait_1',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_2',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_3',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_4',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_5',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_6',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_7',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_8',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_9',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'monster_trait',
    text: 'monster_trait_10',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_11',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_12',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_13',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_14',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_15',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_16',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_17',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_18',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_19',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_20',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_21',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_22',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_23',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_24',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_25',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'monster_trait',
    text: 'monster_trait_26',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_27',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_28',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_29',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_30',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_31',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_32',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_33',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_34',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_35',
  }, {
    type: 'monster_trait',
    text: 'monster_trait_36',
  }],
};

const monsterAbility: IElementDefinition = {
  type: 'monster_ability',
  text: 'monster_ability',
  options: [{
    type: 'monster_ability',
    text: 'monster_ability_1',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_2',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_3',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_4',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_5',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_6',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_7',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_8',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_9',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_10',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'monster_ability',
    text: 'monster_ability_11',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_12',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_13',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_14',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_15',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_16',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_17',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_18',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_19',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_20',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_21',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_22',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_23',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'monster_ability',
    text: 'monster_ability_24',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_25',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_26',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_27',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_28',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_29',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_30',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_31',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_32',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_33',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_34',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_35',
  }, {
    type: 'monster_ability',
    text: 'monster_ability_36',
  }],
};

const monsterTactic: IElementDefinition = {
  type: 'monster_tactic',
  text: 'monster_tactic',
  options: [{
    type: 'monster_tactic',
    text: 'monster_tactic_1',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_2',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_3',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_4',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_5',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_6',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_7',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_8',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_9',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_10',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_11',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_12',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_13',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_14',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_15',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_16',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_17',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_18',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_19',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_20',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_21',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_22',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_23',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_24',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_25',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_26',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_27',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_28',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_29',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_30',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_31',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_32',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_33',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_34',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_35',
  }, {
    type: 'monster_tactic',
    text: 'monster_tactic_36',
  }],
};

const monsterPersonality: IElementDefinition = {
  type: 'monster_personality',
  text: 'monster_personality',
  options: [{
    type: 'monster_personality',
    text: 'monster_personality_1',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_2',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_3',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_4',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_5',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_6',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_7',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_8',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_9',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_10',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_11',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_12',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_13',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_14',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_15',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_16',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_17',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_18',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_19',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_20',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_21',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_22',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_23',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_24',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_25',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_26',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_27',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_28',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_29',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_30',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_31',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_32',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_33',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_34',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_35',
  }, {
    type: 'monster_personality',
    text: 'monster_personality_36',
  }],
};

export {
  monster,
  monsterAbility,
  monsterFeature,
  monsterTrait,
  monsterTactic,
  monsterPersonality,
};
