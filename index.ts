
import * as R from 'ramda';
import requireDir from 'require-dir';
import { worldDefinition } from './lib/definitions/world';
import localizeCreator from './lib/localize';
import { IElement, IElementDefinition, IRelatedElement, IRelatedElements } from './lib/typings';
import worldCreator from './lib/world';
import { debugObject } from './spec/support';

const world = worldCreator(worldDefinition);

const slashN: (i: number) => string = R.compose(R.join(''), R.times(() => '-'));

// const elementText: (texts: string[], element: IElementDefinition, depth: number ) => void =
// (texts, element, depth) => {
//   if (element) {
//     texts.push(`${slashN(depth)} (${element.type}): ${element.text}`);
//   }

//   if (element!.related) {
//     R.forEach((key: string) => {
//       const results: IElementDefinition[] | undefined = element!.related![key].results;
//       if (results) {
//         return elementsTexts(texts, results, depth + 1);
//       }
//       return null;
//     }, R.keys(element!.related));
//   }
// };

// const elementsTexts: (texts: string[], elements: IElementDefinition[] | undefined, depth: number ) => void =
// (texts, elements, depth) => {
//   if (!elements) {
//     return;
//   }

//   R.forEach(function(element: IElementDefinition) {
//     elementText(texts, element, depth);
//   }, elements);
// };

const translations = requireDir('./translations', {recurse: true});
const localize = localizeCreator({locale: 'es', debug: false, translations});

const elementsTexts: (texts: string[], element: IRelatedElement, depth: number ) => void =
(texts, element, depth) => {
  if (!element || !element.results) {
    return;
  }

  R.forEach((result: IElementDefinition | IElement) => {
    texts.push(`${slashN(depth)} (${result.type}): ${localize.t(result)}`);
    if (result.related) {
      R.forEach((key: string) => {
        const related: IRelatedElement = result.related![key] as IRelatedElement;
        elementsTexts(texts, related, depth + 1);
      }, R.keys(result.related));
    }
  }, element.results);
};

const e: any = world.get({
  search: [{type: 'pj'}],
  count: 5,
});

const ts: string[] = [];
elementsTexts(ts, e, 0);
debugObject(ts);

// const translations = requireDir('./translations', {recurse: true});

// debug(translations);
// ​
// const localize = localizeCreator({
//   locale: 'en',
//   debug: false,
//   translations,
// });

// console.log(localize.t({type: 'item', text: 'key'}));

// TODO:
// GIve a name to the saved elements (optional)
// Categorize definitions
// Add an icon of definitions
// Get a list of definitions also by category
