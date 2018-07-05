import { ERandomOption, IElementDefinition } from '../typings';

const trap: IElementDefinition = {
  type: 'trap',
  text: 'trap',
  related: {
    effect: { search: [{ type: 'trap_effect'}] },
    trigger: { search: [{ type: 'trap_trigger'}] },
  },
};

const trapEffect: IElementDefinition = {
  type: 'trap_effect',
  text: 'trap_effect',
  options: [{
    type: 'trap_effect',
    text: 'trap_effect_1',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_2',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_3',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_4',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_5',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_6',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_7',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_8',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_9',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_10',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_11',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_12',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_13',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_14',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_15',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_16',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_17',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_18',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_19',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_20',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_21',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_22',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_23',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_24',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_25',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_26',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_27',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_28',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_29',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_30',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_31',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_32',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_33',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_34',
  }, {
    type: 'trap_effect',
    text: 'trap_effect_35',
    related: { monster: { search: [{ type: 'monster' }] } },
  }, {
    type: 'trap_effect',
    text: 'trap_effect_36',
  }],
};

const trapTrigger: IElementDefinition = {
  type: 'trap_trigger',
  text: 'trap_trigger',
  options: [{
    type: 'trap_trigger',
    text: 'trap_trigger_1',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_2',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_3',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_4',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_5',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_6',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_7',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_8',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_9',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_10',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_11',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_12',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_13',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_14',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_15',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_16',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_17',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_18',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_19',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_20',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_21',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_22',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_23',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_24',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_25',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_26',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_27',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_28',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_29',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_30',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_31',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_32',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_33',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_34',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_35',
  }, {
    type: 'trap_trigger',
    text: 'trap_trigger_36',
  }],
};

export {
  trap,
  trapEffect,
  trapTrigger,
};
