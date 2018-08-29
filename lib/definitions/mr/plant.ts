import { IElementDefinition } from '../../typings';
import { regularDefinition } from '../utils';

const mrPlant: IElementDefinition = {
  type: 'mr_plant',
  text: 'mr_plant',
  options: [{
    type: 'mr_plant',
    text: 'mr_edible_plant',
    related: {
      edible_plant: { search: [{ type: 'mr_edible_plant' }] },
    },
  }, {
    type: 'mr_plant',
    text: 'mr_poisonous_plant',
    related: {
      poisonous_plant: { search: [{ type: 'mr_poisonous_plant' }] },
    },
  }],
};

const mrEdiblePlant: IElementDefinition = regularDefinition('mr_edible_plant', 36);
const mrPoisonousPlant: IElementDefinition = regularDefinition('mr_poisonous_plant', 36);

export {
  mrEdiblePlant,
  mrPlant,
  mrPoisonousPlant,
};
