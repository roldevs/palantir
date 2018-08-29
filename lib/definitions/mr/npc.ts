import * as R from 'ramda';
import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrNpc: IElementDefinition = {
  type: 'mr_npc',
  text: 'mr_npc',
  options: [{
    type: 'mr_npc',
    text: 'mr_npc_civilized',
    related: {
      civilized: {
        search: [{
          type: 'mr_npc_civilized',
        }],
      },
    },
  }, {
    type: 'mr_npc',
    text: 'mr_npc_underworld',
    related: {
      underworld: {
        search: [{
          type: 'mr_npc_underworld',
        }],
      },
    },
  }, {
    type: 'mr_npc',
    text: 'mr_npc_wilderness',
    related: {
      wilderness: {
        search: [{
          type: 'mr_npc_wilderness',
        }],
      },
    },
  }],
};

const mrNpcCivilized: IElementDefinition = {
  type: 'mr_npc_civilized',
  text: 'mr_npc_civilized',
  options: [{
    type: 'mr_npc_civilized',
    text: 'mr_npc_civilized_male',
    related: {
      male: {
        search: [{
          type: 'mr_npc_civilized_male',
        }],
      },
    },
  }, {
    type: 'mr_npc_civilized',
    text: 'mr_npc_civilized_female',
    related: {
      female: {
        search: [{
          type: 'mr_npc_civilized_female',
        }],
      },
    },
  }],
};

const mrNpcUnderworld: IElementDefinition = {
  type: 'mr_npc_underworld',
  text: 'mr_npc_underworld',
  options: [{
    type: 'mr_npc_underworld',
    text: 'mr_npc_underworld_male',
    related: {
      male: {
        search: [{
          type: 'mr_npc_underworld_male',
        }],
      },
    },
  }, {
    type: 'mr_npc_underworld',
    text: 'mr_npc_underworld_female',
    related: {
      female: {
        search: [{
          type: 'mr_npc_underworld_female',
        }],
      },
    },
  }],
};

const mrNpcWilderness: IElementDefinition = {
  type: 'mr_npc_wilderness',
  text: 'mr_npc_wilderness',
  options: [{
    type: 'mr_npc_wilderness',
    text: 'mr_npc_wilderness_male',
    related: {
      male: {
        search: [{
          type: 'mr_npc_wilderness_male',
        }],
      },
    },
  }, {
    type: 'mr_npc_underworld',
    text: 'mr_npc_underworld_female',
    related: {
      female: {
        search: [{
          type: 'mr_npc_wilderness_female',
        }],
      },
    },
  }],
};

const setCommonNpc: (element: IElementDefinition) => IElementDefinition =
R.mergeDeepRight({
  type: 'mr_',
  text: 'mr_',
  related: {
    asset: {
      search: [{
        type: 'mr_npc_asset',
      }],
    },
    liability: {
      search: [{
        type: 'mr_npc_liability',
      }],
    },
    misfortune: {
      search: [{
        type: 'mr_npc_misfortune',
      }],
    },
    goal: {
      search: [{
        type: 'mr_npc_goal',
      }],
    },
    method: {
      search: [{
        type: 'mr_npc_reputation',
      }],
    },
    appearance: {
      search: [{
        type: 'mr_appearance',
      }],
      count: 3,
    },
    physical: {
      search: [{
        type: 'mr_pj_physical',
      }],
    },
    clothes: {
      search: [{
        type: 'mr_clothes',
      }],
    },
    personality: {
      search: [{
        type: 'mr_personality',
      }],
    },
    mannerism: {
      search: [{
        type: 'mr_mannerism',
      }],
    },
    background: {
      search: [{
        type: 'mr_background',
      }],
    },
    secret: {
      search: [{
        type: 'mr_npc_secret',
      }],
    },
    reputation: {
      search: [{
        type: 'mr_npc_reputation',
      }],
    },
    relation: {
      search: [{
        type: 'mr_npc_relation',
      }],
    },
    divinity_domain: {
      search: [{
        type: 'mr_divinity_domain',
      }],
    },
  },
});

const mrNpcCivilizedMale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_civilized_male',
  text: 'mr_npc_civilized_male',
  related: {
    male_name: {
      search: [{
        type: 'mr_male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }],
    },
  },
});

const mrNpcCivilizedFemale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_civilized_female',
  text: 'mr_npc_civilized_female',
  related: {
    male_name: {
      search: [{
        type: 'mr_female_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }],
    },
  },
});

const mrNpcUnderworldMale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_underworld_male',
  text: 'mr_npc_underworld_male',
  related: {
    male_name: {
      search: [{
        type: 'mr_male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_underworld_npc',
      }],
    },
  },
});

const mrNpcUnderworldFemale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_underworld_female',
  text: 'mr_npc_underworld_female',
  related: {
    male_name: {
      search: [{
        type: 'mr_female_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_underworld_npc',
      }],
    },
  },
});

const mrNpcWildernessMale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_wilderness_male',
  text: 'mr_npc_wilderness_male',
  related: {
    male_name: {
      search: [{
        type: 'mr_male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_wilderness_npc',
      }],
    },
  },
});

const mrNpcWildernessFemale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_wilderness_female',
  text: 'mr_npc_wilderness_female',
  related: {
    male_name: {
      search: [{
        type: 'mr_female_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_wilderness_npc',
      }],
    },
  },
});

const mrNpcUpperclassMale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_upperclass_male',
  text: 'mr_npc_upperclass_male',
  related: {
    male_name: {
      search: [{
        type: 'mr_male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }, {
        type: 'mr_underworld_npc',
      }],
    },
  },
});

const mrNpcLowerclassMale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_lowerclass_male',
  text: 'mr_npc_lowerclass_male',
  related: {
    male_name: {
      search: [{
        type: 'mr_male_name',
      }],
    },
    male_surname: {
      search: [{
        type: 'mr_lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }, {
        type: 'mr_underworld_npc',
      }, {
        type: 'mr_wilderness_npc',
      }],
    },
  },
});

const mrNpcUpperclassFemale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_upperclass_female',
  text: 'mr_npc_upperclass_female',
  related: {
    female_name: {
      search: [{
        type: 'mr_female_name',
      }],
    },
    female_surname: {
      search: [{
        type: 'mr_upperclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }, {
        type: 'mr_underworld_npc',
      }],
    },
  },
});

const mrNpcLowerclassFemale: IElementDefinition = setCommonNpc({
  type: 'mr_npc_lowerclass_female',
  text: 'mr_npc_lowerclass_female',
  related: {
    female_name: {
      search: [{
        type: 'mr_female_name',
      }],
    },
    female_surname: {
      search: [{
        type: 'mr_lowerclass_surname',
      }],
    },
    occupation: {
      search: [{
        type: 'mr_civilized_npc',
      }, {
        type: 'mr_underworld_npc',
      }, {
        type: 'mr_wilderness_npc',
      }],
    },
  },
});

const mrMaleNames: IElementDefinition = regularDefinition('mr_male_name', 36);
const mrFemaleNames: IElementDefinition = regularDefinition('mr_female_name', 36);
const mrUpperclassSurname: IElementDefinition = regularDefinition('mr_upperclass_surname', 36);
const mrLowerclassSurname: IElementDefinition = regularDefinition('mr_lowerclass_surname', 36);

const mrNpcGoal: IElementDefinition = apRegularDefinition('mr_npc_goal', 36)([{
  index: 3,
  related: { item: { search: [{ type: 'mr_item', random: ERandomOption.all }] } },
}, {
  index: 4,
  related: { item: { search: [{ type: 'mr_item', random: ERandomOption.all }] } },
}, {
  index: 5,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 6,
  related: { item: { search: [{type: 'mr_item', random: ERandomOption.all }] } },
}, {
  index: 9,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 12,
  related: { npc: { search: [{type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 14,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 16,
  related: { npc: { search: [{type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 17,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 19,
  related: { npc: { search: [{type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 24,
  related: { npc: { search: [{type: 'mr_npc', random: ERandomOption.all }] } },
}, {
  index: 26,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 29,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 32,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}]);

const mrCivilizedNpc: IElementDefinition = regularDefinition('mr_civilized_npc', 36);
const mrUnderworldNpc: IElementDefinition = regularDefinition('mr_underworld_npc', 36);
const mrWildernessNpc: IElementDefinition = regularDefinition('mr_wilderness_npc', 36);

const mrNpcAsset: IElementDefinition = apRegularDefinition('mr_npc_asset', 36)([{
  index: 9,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}, {
  index: 10,
  related: { faction: { search: [{ type: 'mr_faction', random: ERandomOption.all }] } },
}]);

const mrNpcLiability: IElementDefinition = apRegularDefinition('mr_npc_liability', 36)([{
  index: 13,
  related: { insanity: { search: [{ type: 'mr_insanity' }] } },
}]);

const mrNpcMisfortune: IElementDefinition = regularDefinition('mr_npc_misfortune', 36);
const mrMission: IElementDefinition = regularDefinition('mr_mission', 36);
const mrNpcMethod: IElementDefinition = regularDefinition('mr_npc_method', 36);

const mrNpcSecret: IElementDefinition = apRegularDefinition('mr_npc_secret', 36)([{
  index: 23,
  related: { misfortune: { search: [{ type: 'mr_npc_misfortune' }] } },
}, {
  index: 26,
  related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
}]);

const mrNpcReputation: IElementDefinition = regularDefinition('mr_npc_reputation', 36);
const mrNpcRelation: IElementDefinition = regularDefinition('mr_npc_relation', 36);

const mrDivinityDomain: IElementDefinition = apRegularDefinition('mr_divinity_domain', 36)([{
  index: 1,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 11,
  related: { element: { search: [{ type: 'mr_element' }] } },
}, {
  index: 19,
  related: { npc: { search: [{ type: 'mr_npc', random: ERandomOption.all }] } },
}]);

export {
  mrCivilizedNpc,
  mrDivinityDomain,
  mrFemaleNames,
  mrLowerclassSurname,
  mrMaleNames,
  mrMission,
  mrNpc,
  mrNpcAsset,
  mrNpcCivilized,
  mrNpcCivilizedFemale,
  mrNpcCivilizedMale,
  mrNpcGoal,
  mrNpcLiability,
  mrNpcLowerclassFemale,
  mrNpcLowerclassMale,
  mrNpcMethod,
  mrNpcMisfortune,
  mrNpcRelation,
  mrNpcReputation,
  mrNpcSecret,
  mrNpcUnderworld,
  mrNpcUnderworldFemale,
  mrNpcUnderworldMale,
  mrNpcUpperclassFemale,
  mrNpcUpperclassMale,
  mrNpcWilderness,
  mrNpcWildernessFemale,
  mrNpcWildernessMale,
  mrUnderworldNpc,
  mrUpperclassSurname,
  mrWildernessNpc,
};
