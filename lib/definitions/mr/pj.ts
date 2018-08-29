import { ERandomOption, IElementDefinition } from '../../typings';
import { regularDefinition } from '../utils';

const mrPj: IElementDefinition = {
  type: 'mr_pj',
  text: 'mr_pj',
  related: {
    appearance: {
      search: [{
        type: 'mr_appearance',
        random: ERandomOption.random,
      }],
      count: 3,
    },
    physical: {
      search: [{
        type: 'mr_pj_physical',
        random: ERandomOption.random,
      }],
    },
    clothes: {
      search: [{
        type: 'mr_clothes',
        random: ERandomOption.random,
      }],
    },
    background: {
      search: [{
        type: 'mr_background',
        random: ERandomOption.random,
      }],
    },
    mannerism: {
      search: [{
        type: 'mr_mannerism',
        random: ERandomOption.random,
      }],
    },
    personality: {
      search: [{
        type: 'mr_personality',
        random: ERandomOption.random,
      }],
    },
  },
};

const mrAppearance: IElementDefinition = regularDefinition('mr_appearance', 36);
const mrPjPhysical: IElementDefinition = regularDefinition('mr_pj_physical', 36);
const mrBackground: IElementDefinition = regularDefinition('mr_background', 36);
const mrPersonality: IElementDefinition = regularDefinition('mr_personality', 36);
const mrClothes: IElementDefinition = regularDefinition('mr_clothes', 36);
const mrMannerism: IElementDefinition = regularDefinition('mr_mannerism', 36);

export {
  mrAppearance,
  mrBackground,
  mrClothes,
  mrMannerism,
  mrPersonality,
  mrPj,
  mrPjPhysical,
};
