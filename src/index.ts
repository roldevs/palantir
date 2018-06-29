
import requireDir from 'require-dir';
import { worldDefinition } from './definitions/world';
import localizeCreator from './localize';
import worldCreator from './world';

/* tslint:disable no-console */
const debug: (obj: any) => void = (obj: any) => console.log(JSON.stringify(obj, null, 2));
/* tslint:enable no-console */

// const world = worldCreator(worldDefinition);

// debug(world.getElement('npc'));

const translations = requireDir('./translations', {recurse: true});

debug(translations);
​
const localize = localizeCreator({
  locale: 'en',
  debug: false,
  translations,
});

console.log(localize.t({type: 'item', text: 'key'}));
