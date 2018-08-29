import { ERandomOption, IElementDefinition } from '../../typings';
import { regularDefinition } from '../utils';

const mythicEvent: IElementDefinition = {
  type: 'mythic_event',
  text: 'mythic_event',
  related: {
    focus: {
      search: [{
        type: 'mythic_event_focus',
        random: ERandomOption.random,
      }],
    },
    meaning: {
      search: [{
        type: 'mythic_event_meaning',
        random: ERandomOption.random,
      }],
    },
  },
};

const mythicEventFocus: IElementDefinition = regularDefinition('mythic_event_focus', 10);
const mythicEventMeaning: IElementDefinition = regularDefinition('mythic_event_meaning', 200);

export {
  mythicEvent,
  mythicEventFocus,
  mythicEventMeaning,
};
