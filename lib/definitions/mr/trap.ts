import { IElementDefinition } from '../../typings';
import { apRegularDefinition, regularDefinition } from '../utils';

const mrTrap: IElementDefinition = {
  type: 'mr_trap',
  text: 'mr_trap',
  related: {
    effect: { search: [{ type: 'mr_trap_effect'}] },
    trigger: { search: [{ type: 'mr_trap_trigger'}] },
  },
};

const mrTrapEffect: IElementDefinition = apRegularDefinition('mr_trap_effect', 36)([{
  index: 35,
  related: { monster: { search: [{ type: 'mr_monster' }] } },
}]);

const mrTrapTrigger: IElementDefinition = regularDefinition('mr_trap_trigger', 36);

export {
  mrTrap,
  mrTrapEffect,
  mrTrapTrigger,
};
