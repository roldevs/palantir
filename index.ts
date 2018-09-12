
// import fs from 'fs';
// import * as R from 'ramda';
// import requireDir from 'require-dir';
// import localConnector from './lib/connectors/local';
// import { mythicEvent, mythicEventFocus, mythicEventMeaning } from './lib/definitions/mythic/random_event';
// import { worldDefinition } from './lib/definitions/world';
// import localizeCreator from './lib/localize';
// import {
//   IElement,
//   IElementDefinition,
//   IRelatedElement,
//   IRelatedElements,
//   ITable,
//   ITableLocator
// } from './lib/typings';
// import worldCreator from './lib/world';

// import { debugObject } from './spec/support';

// const world = worldCreator(worldDefinition);

// const slashN: (i: number) => string = R.compose(R.join(''), R.times(() => '-'));

// const translations = requireDir('./translations', {recurse: true});
// const localize = localizeCreator({locale: 'es', debug: false, translations});

// const elementsTexts: (texts: string[], element: IRelatedElement, depth: number ) => void =
// (texts, element, depth) => {
//   if (!element || !element.results) {
//     return;
//   }

//   R.forEach((result: IElementDefinition | IElement) => {
//     // console.log(result)
//     texts.push(`${slashN(depth)} (${result.type}): ${localize.t(result)}`);
//     if (result.related) {
//       R.forEach((key: string) => {
//         const related: IRelatedElement = result.related![key] as IRelatedElement;
//         elementsTexts(texts, related, depth + 1);
//       }, R.keys(result.related));
//     }
//   }, element.results);
// };

// const t = localize.t;

// const elementNew: (definition: IElementDefinition) => void =
// (definition) => {
//   let n: any = { text: localize.t(definition) };

//   if (definition.options) {
//     n = R.set(R.lensProp('options'), R.map(elementNew, definition.options), n);
//   }

//   if (definition.related) {
//     n = R.set(R.lensProp('related'), definition.related, n);
//   }
//   return n;
// };

// const e: any = world.get({
//   search: [{ns: 'mr', type: 'magic'}],
//   count: 2,
// });

// // const ts: string[] = [];
// // elementsTexts(ts, e, 0);
// // debugObject(ts);

// // const definitions: any = [
// //   mythicEvent, mythicEventFocus, mythicEventMeaning
// // ];

// // const lines: string[] = R.map(
// //   (def: IElementDefinition) => {
// //     return R.join('\n', [
// //       '----------------------------------------',
// //       JSON.stringify(elementNew(def), null, 2),
// //     ]);
// //   }, definitions,
// // );

// // fs.writeFile('./definitions.txt', R.join('\n', lines) , function(err) {
// //     if (err) {
// //       return console.log(err);
// //     }
// //     console.log('The file was saved!');
// // });

// // const connector = localConnector({
// //   rootPath: './definitions',
// // });

// // const locator: ITableLocator = {
// //   locale: 'es',
// //   ns: 'mr',
// //   type: 'dungeon',
// // };

// // connector.get(locator).then((data: ITable) => {
// //   console.log(data);
// // });
// // TODO:
// // Add namespace to definitions
// // GIve a name to the saved elements (optional)
// // Categorize definitions
// // Add an icon of definitions
// // Get a list of definitions also by category

import memoryRepository from './lib/repository/memory';
import { uuid } from './lib/typings';
import { getUUID } from './lib/utils';

const guid: uuid = getUUID();
const text: string = 'Test';
const repository = memoryRepository({
  locale: 'es',
  elements: {
    es: [{
      ns: 'ns',
      type: 'item1',
      guid,
      text,
    }, {
      ns: 'ns',
      type: 'item2',
      guid: getUUID(),
      text: 'Test2',
    }],
  },
});

repository.get(guid).then(console.log);
