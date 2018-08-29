import { IElementDefinition } from '../../typings';
import { regularDefinition } from '../utils';

const mrAnimalAerial: IElementDefinition = regularDefinition('mr_animal_aerial', 36);
const mrAnimalTerrestrial: IElementDefinition = regularDefinition('mr_animal_terrestrial', 36);
const mrAnimalAquatic: IElementDefinition = regularDefinition('mr_animal_aquatic', 36);

export { mrAnimalTerrestrial, mrAnimalAerial, mrAnimalAquatic };
