
import * as R from 'ramda';
import { worldDefinition } from './definitions/world';
import {
  ERandomOption,
  IElement,
  IElementDefinition,
  IRelatedDefinition,
  IWorldDefinition,
} from './typings';
import worldCreator from './world';

/* tslint:disable no-console */
const debug: (obj: any) => void = (obj: any) => console.log(JSON.stringify(obj, null, 2));
/* tslint:enable no-console */

const world = worldCreator(worldDefinition);

debug(world.getElement('npc'));
