import { ERandomOption, IElementDefinition } from '../typings';

const magic: IElementDefinition = {
  type: 'magic',
  text: 'magic',
  options: [{
    type: 'magic',
    text: 'physical_effect_physical_form',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'physical_effect_ethereal_form',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_effect_physical_form',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_effect_ethereal_form',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'physical_element_physical_form',
    related: {
      physical_element: {
        search: [{
          type: 'physical_element',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'physical_element_ethereal_form',
    related: {
      physical_element: {
        search: [{
          type: 'physical_element',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_element_physical_form',
    related: {
      ethereal_element: {
        search: [{
          type: 'ethereal_element',
          random: ERandomOption.random,
        }],
      },
      physical_form: {
        search: [{
          type: 'physical_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_element_ethereal_form',
    related: {
      ethereal_element: {
        search: [{
          type: 'ethereal_element',
          random: ERandomOption.random,
        }],
      },
      ethereal_form: {
        search: [{
          type: 'ethereal_form',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'physical_effect_physical_element',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
      physical_element: {
        search: [{
          type: 'physical_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'physical_effect_ethereal_element',
    related: {
      physical_effect: {
        search: [{
          type: 'physical_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_element: {
        search: [{
          type: 'ethereal_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_effect_physical_element',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      physical_element: {
        search: [{
          type: 'physical_element',
          random: ERandomOption.random,
        }],
      },
    },
  }, {
    type: 'magic',
    text: 'ethereal_effect_ethereal_element',
    related: {
      ethereal_effect: {
        search: [{
          type: 'ethereal_effect',
          random: ERandomOption.random,
        }],
      },
      ethereal_element: {
        search: [{
          type: 'ethereal_element',
          random: ERandomOption.random,
        }],
      },
    },
  }],
};

const physicalEffect: IElementDefinition = {
  type: 'physical_effect',
  text: 'physical_effect',
  options: [{
    type: 'physical_effect',
    text: 'physical_effect_1',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_2',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_3',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_4',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_5',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_6',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_7',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_8',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_9',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_10',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_11',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_12',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_13',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_14',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_15',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_16',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_17',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_18',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_19',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_20',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_21',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_22',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_23',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_24',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_25',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_26',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_27',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_28',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_29',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_30',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_31',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_32',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_33',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_34',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_35',
  }, {
    type: 'physical_effect',
    text: 'physical_effect_36',
  }],
};

const physicalElement: IElementDefinition = {
  type: 'physical_element',
  text: 'physical_element',
  options: [{
    type: 'physical_element',
    text: 'physical_element_1',
  }, {
    type: 'physical_element',
    text: 'physical_element_2',
  }, {
    type: 'physical_element',
    text: 'physical_element_3',
  }, {
    type: 'physical_element',
    text: 'physical_element_4',
  }, {
    type: 'physical_element',
    text: 'physical_element_5',
  }, {
    type: 'physical_element',
    text: 'physical_element_6',
  }, {
    type: 'physical_element',
    text: 'physical_element_7',
  }, {
    type: 'physical_element',
    text: 'physical_element_8',
  }, {
    type: 'physical_element',
    text: 'physical_element_9',
  }, {
    type: 'physical_element',
    text: 'physical_element_10',
  }, {
    type: 'physical_element',
    text: 'physical_element_11',
  }, {
    type: 'physical_element',
    text: 'physical_element_12',
  }, {
    type: 'physical_element',
    text: 'physical_element_13',
  }, {
    type: 'physical_element',
    text: 'physical_element_14',
  }, {
    type: 'physical_element',
    text: 'physical_element_15',
  }, {
    type: 'physical_element',
    text: 'physical_element_16',
  }, {
    type: 'physical_element',
    text: 'physical_element_17',
  }, {
    type: 'physical_element',
    text: 'physical_element_18',
  }, {
    type: 'physical_element',
    text: 'physical_element_19',
  }, {
    type: 'physical_element',
    text: 'physical_element_20',
  }, {
    type: 'physical_element',
    text: 'physical_element_21',
  }, {
    type: 'physical_element',
    text: 'physical_element_22',
  }, {
    type: 'physical_element',
    text: 'physical_element_23',
  }, {
    type: 'physical_element',
    text: 'physical_element_24',
  }, {
    type: 'physical_element',
    text: 'physical_element_25',
  }, {
    type: 'physical_element',
    text: 'physical_element_26',
  }, {
    type: 'physical_element',
    text: 'physical_element_27',
  }, {
    type: 'physical_element',
    text: 'physical_element_28',
  }, {
    type: 'physical_element',
    text: 'physical_element_29',
  }, {
    type: 'physical_element',
    text: 'physical_element_30',
  }, {
    type: 'physical_element',
    text: 'physical_element_31',
  }, {
    type: 'physical_element',
    text: 'physical_element_32',
  }, {
    type: 'physical_element',
    text: 'physical_element_33',
  }, {
    type: 'physical_element',
    text: 'physical_element_34',
  }, {
    type: 'physical_element',
    text: 'physical_element_35',
  }, {
    type: 'physical_element',
    text: 'physical_element_36',
  }],
};

const physicalForm: IElementDefinition = {
  type: 'physical_form',
  text: 'physical_form',
  options: [{
    type: 'physical_form',
    text: 'physical_form_1',
  }, {
    type: 'physical_form',
    text: 'physical_form_2',
  }, {
    type: 'physical_form',
    text: 'physical_form_3',
  }, {
    type: 'physical_form',
    text: 'physical_form_4',
  }, {
    type: 'physical_form',
    text: 'physical_form_5',
  }, {
    type: 'physical_form',
    text: 'physical_form_6',
  }, {
    type: 'physical_form',
    text: 'physical_form_7',
  }, {
    type: 'physical_form',
    text: 'physical_form_8',
  }, {
    type: 'physical_form',
    text: 'physical_form_9',
  }, {
    type: 'physical_form',
    text: 'physical_form_10',
  }, {
    type: 'physical_form',
    text: 'physical_form_11',
  }, {
    type: 'physical_form',
    text: 'physical_form_12',
  }, {
    type: 'physical_form',
    text: 'physical_form_13',
  }, {
    type: 'physical_form',
    text: 'physical_form_14',
  }, {
    type: 'physical_form',
    text: 'physical_form_15',
  }, {
    type: 'physical_form',
    text: 'physical_form_16',
  }, {
    type: 'physical_form',
    text: 'physical_form_17',
  }, {
    type: 'physical_form',
    text: 'physical_form_18',
  }, {
    type: 'physical_form',
    text: 'physical_form_19',
  }, {
    type: 'physical_form',
    text: 'physical_form_20',
  }, {
    type: 'physical_form',
    text: 'physical_form_21',
  }, {
    type: 'physical_form',
    text: 'physical_form_22',
  }, {
    type: 'physical_form',
    text: 'physical_form_23',
  }, {
    type: 'physical_form',
    text: 'physical_form_24',
  }, {
    type: 'physical_form',
    text: 'physical_form_25',
  }, {
    type: 'physical_form',
    text: 'physical_form_26',
  }, {
    type: 'physical_form',
    text: 'physical_form_27',
  }, {
    type: 'physical_form',
    text: 'physical_form_28',
  }, {
    type: 'physical_form',
    text: 'physical_form_29',
  }, {
    type: 'physical_form',
    text: 'physical_form_30',
  }, {
    type: 'physical_form',
    text: 'physical_form_31',
  }, {
    type: 'physical_form',
    text: 'physical_form_32',
  }, {
    type: 'physical_form',
    text: 'physical_form_33',
  }, {
    type: 'physical_form',
    text: 'physical_form_34',
  }, {
    type: 'physical_form',
    text: 'physical_form_35',
  }, {
    type: 'physical_form',
    text: 'physical_form_36',
  }],
};

const etherealEffect: IElementDefinition = {
  type: 'ethereal_effect',
  text: 'ethereal_effect',
  options: [{
    type: 'ethereal_effect',
    text: 'ethereal_effect_1',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_2',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_3',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_4',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_5',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_6',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_7',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_8',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_9',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_10',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_11',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_12',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_13',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_14',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_15',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_16',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_17',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_18',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_19',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_20',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_21',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_22',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_23',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_24',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_25',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_26',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_27',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_28',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_29',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_30',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_31',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_32',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_33',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_34',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_35',
  }, {
    type: 'ethereal_effect',
    text: 'ethereal_effect_36',
  }],
};

const etherealElement: IElementDefinition = {
  type: 'ethereal_element',
  text: 'ethereal_element',
  options: [{
    type: 'ethereal_element',
    text: 'ethereal_element_1',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_2',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_3',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_4',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_5',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_6',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_7',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_8',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_9',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_10',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_11',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_12',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_13',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_14',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_15',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_16',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_17',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_18',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_19',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_20',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_21',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_22',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_23',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_24',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_25',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_26',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_27',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_28',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_29',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_30',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_31',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_32',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_33',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_34',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_35',
  }, {
    type: 'ethereal_element',
    text: 'ethereal_element_36',
  }],
};

const etherealForm: IElementDefinition = {
  type: 'ethereal_form',
  text: 'ethereal_form',
  options: [{
    type: 'ethereal_form',
    text: 'ethereal_form_1',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_2',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_3',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_4',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_5',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_6',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_7',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_8',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_9',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_10',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_11',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_12',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_13',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_14',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_15',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_16',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_17',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_18',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_19',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_20',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_21',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_22',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_23',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_24',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_25',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_26',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_27',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_28',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_29',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_30',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_31',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_32',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_33',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_34',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_35',
  }, {
    type: 'ethereal_form',
    text: 'ethereal_form_36',
  }],
};

const mutation: IElementDefinition = {
  type: 'mutation',
  text: 'mutation',
  options: [{
    type: 'mutation',
    text: 'mutation_1',
  }, {
    type: 'mutation',
    text: 'mutation_2',
  }, {
    type: 'mutation',
    text: 'mutation_3',
  }, {
    type: 'mutation',
    text: 'mutation_4',
  }, {
    type: 'mutation',
    text: 'mutation_5',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_6',
  }, {
    type: 'mutation',
    text: 'mutation_7',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_8',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_9',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_10',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_11',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_12',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_13',
  }, {
    type: 'mutation',
    text: 'mutation_14',
  }, {
    type: 'mutation',
    text: 'mutation_15',
  }, {
    type: 'mutation',
    text: 'mutation_16',
  }, {
    type: 'mutation',
    text: 'mutation_17',
  }, {
    type: 'mutation',
    text: 'mutation_18',
  }, {
    type: 'mutation',
    text: 'mutation_19',
  }, {
    type: 'mutation',
    text: 'mutation_20',
    related: { item: { search: [{ type: 'item' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_21',
  }, {
    type: 'mutation',
    text: 'mutation_22',
  }, {
    type: 'mutation',
    text: 'mutation_23',
  }, {
    type: 'mutation',
    text: 'mutation_24',
    related: { monster_feature: { search: [{ type: 'monster_feature' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_25',
    related: { monster_trait: { search: [{ type: 'monster_trait' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_26',
  }, {
    type: 'mutation',
    text: 'mutation_27',
    related: { physical_effect: { search: [{ type: 'physical_effect' }] } },
  }, {
    type: 'mutation',
    text: 'mutation_28',
  }, {
    type: 'mutation',
    text: 'mutation_29',
  }, {
    type: 'mutation',
    text: 'mutation_30',
  }, {
    type: 'mutation',
    text: 'mutation_31',
  }, {
    type: 'mutation',
    text: 'mutation_32',
  }, {
    type: 'mutation',
    text: 'mutation_33',
  }, {
    type: 'mutation',
    text: 'mutation_34',
  }, {
    type: 'mutation',
    text: 'mutation_35',
  }, {
    type: 'mutation',
    text: 'mutation_36',
  }],
};

const insanity: IElementDefinition = {
  type: 'insanity',
  text: 'insanity',
  options: [{
    type: 'insanity',
    text: 'insanity_1',
  }, {
    type: 'insanity',
    text: 'insanity_2',
  }, {
    type: 'insanity',
    text: 'insanity_3',
    related: { animal: { search: [{ type: 'animal' }] } },
  }, {
    type: 'insanity',
    text: 'insanity_4',
  }, {
    type: 'insanity',
    text: 'insanity_5',
  }, {
    type: 'insanity',
    text: 'insanity_6',
  }, {
    type: 'insanity',
    text: 'insanity_7',
  }, {
    type: 'insanity',
    text: 'insanity_8',
  }, {
    type: 'insanity',
    text: 'insanity_9',
  }, {
    type: 'insanity',
    text: 'insanity_10',
  }, {
    type: 'insanity',
    text: 'insanity_11',
  }, {
    type: 'insanity',
    text: 'insanity_12',
  }, {
    type: 'insanity',
    text: 'insanity_13',
  }, {
    type: 'insanity',
    text: 'insanity_14',
  }, {
    type: 'insanity',
    text: 'insanity_15',
  }, {
    type: 'insanity',
    text: 'insanity_16',
  }, {
    type: 'insanity',
    text: 'insanity_17',
  }, {
    type: 'insanity',
    text: 'insanity_18',
  }, {
    type: 'insanity',
    text: 'insanity_19',
  }, {
    type: 'insanity',
    text: 'insanity_20',
  }, {
    type: 'insanity',
    text: 'insanity_21',
  }, {
    type: 'insanity',
    text: 'insanity_22',
  }, {
    type: 'insanity',
    text: 'insanity_23',
  }, {
    type: 'insanity',
    text: 'insanity_24',
  }, {
    type: 'insanity',
    text: 'insanity_25',
  }, {
    type: 'insanity',
    text: 'insanity_26',
  }, {
    type: 'insanity',
    text: 'insanity_27',
  }, {
    type: 'insanity',
    text: 'insanity_28',
  }, {
    type: 'insanity',
    text: 'insanity_29',
  }, {
    type: 'insanity',
    text: 'insanity_30',
    related: { monster_ability: { search: [{ type: 'monster_ability' }] } },
  }, {
    type: 'insanity',
    text: 'insanity_31',
    related: { monster_feature: { search: [{ type: 'monster_feature' }] } },
  }, {
    type: 'insanity',
    text: 'insanity_32',
    related: { monster_trait: { search: [{ type: 'monster_trait' }] } },
  }, {
    type: 'insanity',
    text: 'insanity_33',
  }, {
    type: 'insanity',
    text: 'insanity_34',
    related: { personality: { search: [{ type: 'personality' }] } },
  }, {
    type: 'insanity',
    text: 'insanity_35',
  }, {
    type: 'insanity',
    text: 'insanity_36',
  }],
};

const catastrophe: IElementDefinition = {
  type: 'catastrophe',
  text: 'catastrophe',
  options: [{
    type: 'catastrophe',
    text: 'catastrophe_1',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_2',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_3',
    related: { mutation: { search: [{ type: 'mutation' }] } },
  }, {
    type: 'catastrophe',
    text: 'catastrophe_4',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_5',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_6',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_7',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_8',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_9',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_10',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_11',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_12',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_13',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_14',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_15',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_16',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_17',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_18',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_19',
    related: { insanity: { search: [{ type: 'insanity' }] } },
  }, {
    type: 'catastrophe',
    text: 'catastrophe_20',
    related: { mutation: { search: [{ type: 'mutation' }] } },
  }, {
    type: 'catastrophe',
    text: 'catastrophe_21',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_22',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_23',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_24',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_25',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_26',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_27',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_28',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_29',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_30',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_31',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_32',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_33',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_34',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_35',
  }, {
    type: 'catastrophe',
    text: 'catastrophe_36',
  }],
};

export {
  magic,
  etherealEffect,
  etherealElement,
  etherealForm,
  physicalEffect,
  physicalElement,
  physicalForm,
  mutation,
  insanity,
  catastrophe,
};
