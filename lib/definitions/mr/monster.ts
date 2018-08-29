import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrMonster: IElementDefinition = {
  type: 'mr_monster',
  text: 'mr_monster',
  related: {
    feature: {
      search: [{
        type: 'mr_monster_feature',
        random: ERandomOption.random,
      }],
    },
    trait: {
      search: [{
        type: 'mr_monster_trait',
        random: ERandomOption.random,
      }],
    },
    ability: {
      search: [{
        type: 'mr_monster_ability',
        random: ERandomOption.random,
      }],
    },
    tactic: {
      search: [{
        type: 'mr_monster_tactic',
        random: ERandomOption.random,
      }],
    },
    personality: {
      search: [{
        type: 'mr_monster_personality',
        random: ERandomOption.random,
      }],
    },
    weakness: {
      search: [{
        type: 'mr_monster_weakness',
        random: ERandomOption.random,
      }],
    },
  },
};

const mrMonsterFeature: IElementDefinition = regularDefinition('mr_monster_feature', 36);
const mrMonsterTrait: IElementDefinition = apRegularDefinition('mr_monster_trait', 36)([{
  index: 9,
  related: {
    ethereal_effect: {
      search: [{
        type: 'mr_ethereal_effect',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 25,
  related: {
    physical_effect: {
      search: [{
        type: 'mr_physical_effect',
        random: ERandomOption.random,
      }],
    },
  },
}]);

const mrMonsterAbility: IElementDefinition = apRegularDefinition('mr_monster_ability', 36)([{
  index: 10,
  related: {
    ethereal_effect: {
      search: [{
        type: 'mr_ethereal_effect',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 23,
  related: {
    physical_effect: {
      search: [{
        type: 'mr_physical_effect',
        random: ERandomOption.random,
      }],
    },
  },
}]);

const mrMonsterTactic: IElementDefinition = regularDefinition('mr_monster_tactic', 36);
const mrMonsterPersonality: IElementDefinition = regularDefinition('mr_monster_personality', 36);
const mrMonsterWeakness: IElementDefinition = apRegularDefinition('mr_monster_weakness', 36)([{
  index: 17,
  related: {
    insanity: {
      search: [{
        type: 'mr_insanity',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 22,
  related: {
    npc_method: {
      search: [{
        type: 'mr_npc_method',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 24,
  related: {
    physical_element: {
      search: [{
        type: 'mr_physical_element',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 32,
  related: {
    valuable_material: {
      search: [{
        type: 'mr_valuable_material',
        random: ERandomOption.random,
      }],
    },
  },
}, {
  index: 34,
  related: {
    weapon_item: {
      search: [{
        type: 'mr_weapon_item',
        random: ERandomOption.random,
      }],
    },
  },
}]);

export {
  mrMonster,
  mrMonsterAbility,
  mrMonsterFeature,
  mrMonsterPersonality,
  mrMonsterTactic,
  mrMonsterTrait,
  mrMonsterWeakness,
};
