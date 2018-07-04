
import * as R from 'ramda';
import requireDir from 'require-dir';
import { worldDefinition } from './lib/definitions/world';
import localizeCreator from './lib/localize';
import { IElementDefinition } from './lib/typings';
import worldCreator from './lib/world';

/* tslint:disable no-console */
const debug: (obj: any) => void = (obj: any) => console.log(JSON.stringify(obj, null, 2));
/* tslint:enable no-console */

const world = worldCreator(worldDefinition);

const slashN: (i: number) => string = R.compose(R.join(''), R.times(() => '-'));

const elementTexts: (texts: string[], element: IElementDefinition | undefined, depth: number ) => void =
(texts, element, depth) => {
  if (element) {
    texts.push(`${slashN(depth)} (${element.type}): ${element.text}`);
  }

  if (element!.related) {
    R.forEach((key: string) => {
      const result: IElementDefinition | undefined = element!.related![key].result;
      if (result) {
        return elementTexts(texts, result, depth + 1);
      }
      return null;
    }, R.keys(element!.related));
  }
};

R.times(() => {
  const e: any = world.getElement('dungeon');
  const t: string[] = [];
  elementTexts(t, e, 0);
  debug(t);
}, 10);

// const translations = requireDir('./translations', {recurse: true});

// debug(translations);
// ​
// const localize = localizeCreator({
//   locale: 'en',
//   debug: false,
//   translations,
// });

// console.log(localize.t({type: 'item', text: 'key'}));
