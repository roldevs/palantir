import { ERandomOption, IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrMagic: IElementDefinition = {
  type: 'mr_magic',
  text: 'mr_magic',
  options: [{
    type: 'mr_magic',
    text: 'mr_physical_effect_physical_form',
    related: {
      physical_effect: {
        search: [{
          type: 'mr_physical_effect',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'mr_physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_physical_effect_ethereal_form',
    related: {
      physical_effect: {
        search: [{
          type: 'mr_physical_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'mr_ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_effect_physical_form',
    related: {
      ethereal_effect: {
        search: [{
          type: 'mr_ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'mr_physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_effect_ethereal_form',
    related: {
      ethereal_effect: {
        search: [{
          type: 'mr_ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'mr_ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_physical_element_physical_form',
    related: {
      physical_element: {
        search: [{
          type: 'mr_physical_element',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'mr_physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_physical_element_ethereal_form',
    related: {
      physical_element: {
        search: [{
          type: 'mr_physical_element',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'mr_ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_element_physical_form',
    related: {
      ethereal_element: {
        search: [{
          type: 'mr_ethereal_element',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'mr_physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_element_ethereal_form',
    related: {
      ethereal_element: {
        search: [{
          type: 'mr_ethereal_element',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'mr_ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_physical_effect_physical_element',
    related: {
      physical_effect: {
        search: [{
          type: 'mr_physical_effect',
          random: ERandomOption.random,
        }],
      },
      physical_element: {
        search: [{
          type: 'mr_physical_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_physical_effect_ethereal_element',
    related: {
      physical_effect: {
        search: [{
          type: 'mr_physical_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_element: {
        search: [{
          type: 'mr_ethereal_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_effect_physical_element',
    related: {
      ethereal_effect: {
        search: [{
          type: 'mr_ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      physical_element: {
        search: [{
          type: 'mr_physical_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'mr_magic',
    text: 'mr_ethereal_effect_ethereal_element',
    related: {
      ethereal_effect: {
        search: [{
          type: 'mr_ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_element: {
        search: [{
          type: 'mr_ethereal_element',
          random: ERandomOption.random,
        }],
      },
    },
  }],
};

const mrPhysicalEffect: IElementDefinition = regularDefinition('mr_physical_effect', 36);
const mrPhysicalElement: IElementDefinition = regularDefinition('mr_physical_element', 36);
const mrPhysicalForm: IElementDefinition = regularDefinition('mr_physical_form', 36);
const mrEtherealEffect: IElementDefinition = regularDefinition('mr_ethereal_effect', 36);
const mrEtherealElement: IElementDefinition = regularDefinition('mr_ethereal_element', 36);
const mrEtherealForm: IElementDefinition = regularDefinition('mr_ethereal_form', 36);

const mrMutation: IElementDefinition = apRegularDefinition('mr_mutation', 36)([{
  index: 5,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 7,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 8,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 9,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 10,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 11,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 12,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 20,
  related: { item: { search: [{ type: 'mr_item' }] } },
}, {
  index: 24,
  related: { monster_feature: { search: [{ type: 'mr_monster_feature' }] } },
}, {
  index: 25,
  related: { monster_trait: { search: [{ type: 'mr_monster_trait' }] } },
}, {
  index: 27,
  related: { physical_effect: { search: [{ type: 'mr_physical_effect' }] } },
}]);

const mrInsanity: IElementDefinition = apRegularDefinition('mr_insanity', 36)([{
  index: 3,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 30,
  related: { monster_ability: { search: [{ type: 'mr_monster_ability' }] } },
}, {
  index: 31,
  related: { monster_feature: { search: [{ type: 'mr_monster_feature' }] } },
}, {
  index: 32,
  related: { monster_trait: { search: [{ type: 'mr_monster_trait' }] } },
}]);

const mrCatastrophe: IElementDefinition = apRegularDefinition('mr_catastrophe', 36)([{
  index: 3,
  related: { mutation: { search: [{ type: 'mr_mutation' }] } },
}, {
  index: 19,
  related: { insanity: { search: [{ type: 'mr_insanity' }] } },
}, {
  index: 20,
  related: { mutation: { search: [{ type: 'mr_mutation' }] } },
}]);

const mrPotion: IElementDefinition = apRegularDefinition('mr_potion', 36)([{
  index: 1,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 5,
  related: { element: { search: [{ type: 'mr_element' }] } },
}, {
  index: 11,
  related: { insanity: { search: [{ type: 'mr_insanity' }] } },
}, {
  index: 12,
  related: { element: { search: [{ type: 'mr_element' }] } },
}, {
  index: 17,
  related: { element: { search: [{ type: 'mr_element' }] } },
}, {
  index: 19,
  related: { item: { search: [{ type: 'mr_item' }] } },
}, {
  index: 21,
  related: { magic: { search: [{ type: 'mr_magic' }] } },
}, {
  index: 24,
  related: { monster_feature: { search: [{ type: 'mr_monster_feature' }] } },
}, {
  index: 25,
  related: { monster_trait: { search: [{ type: 'mr_monster_trait' }] } },
}, {
  index: 26,
  related: { mutation: { search: [{ type: 'mr_mutation' }] } },
}, {
  index: 35,
  related: { monster_ability: { search: [{ type: 'mr_monster_ability' }] } },
}]);

const mrMagicIngredient: IElementDefinition = apRegularDefinition('mr_magic_ingredient', 36)([{
  index: 2,
  related: { animal: { search: [{ type: 'mr_animal' }] } },
}, {
  index: 4,
  related: { plant: { search: [{ type: 'mr_plant' }] } },
}, {
  index: 5,
  related: { book: { search: [{ type: 'mr_book' }] } },
}, {
  index: 20,
  related: { monster_feature: { search: [{ type: 'mr_monster_feature' }] } },
}, {
  index: 23,
  related: { physical_element: { search: [{ type: 'mr_physical_element' }] } },
}, {
  index: 24,
  related: { poisonous_plant: { search: [{ type: 'mr_poisonous_plant' }] } },
}, {
  index: 25,
  related: { potion: { search: [{ type: 'mr_potion' }] } },
}, {
  index: 33,
  related: { valuable_material: { search: [{ type: 'mr_valuable_material' }] } },
}]);

export {
  mrCatastrophe,
  mrEtherealEffect,
  mrEtherealElement,
  mrEtherealForm,
  mrInsanity,
  mrMagic,
  mrMagicIngredient,
  mrMutation,
  mrPhysicalEffect,
  mrPhysicalElement,
  mrPhysicalForm,
  mrPotion,
};
