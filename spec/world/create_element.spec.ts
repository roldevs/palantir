// /* tslint:disable no-unused-expression */
// import { expect } from 'chai';
// import * as R from 'ramda';
// import {
//   ERandomOption,
//   IElement,
//   IElementDefinition,
//   IRelatedDefinition,
//   IWorldDefinition,
// } from '../../src/typings';
// import worldCreator from '../../src/world';

// describe('World#createElement', () => {
//   describe('simple element', () => {
//     describe('find type', () => {
//       const worldDefinition: IWorldDefinition = {
//         definitions: [{
//           type: 'item',
//           description: 'description of item',
//           options: [{
//             type: 'item_1',
//           }, {
//             type: 'item_2',
//           }],
//         }],
//         alias: {},
//         existing: [],
//       };
//       const world: any = worldCreator(worldDefinition);

//       it('should return a new element', () => {
//         const related: IRelatedDefinition = { type: 'item' };
//         const subject: IElementDefinition = world.createElement(related);

//         expect(subject.type).to.be.oneOf(['item_1', 'item_2']);
//         // expect(subject.description).to.eql('description of item');
//         expect(subject.related).to.be.undefined;
//         expect(subject.options).to.be.undefined;
//       });
//     });

//     describe('type is not found', () => {
//       const worldDefinition: IWorldDefinition = {
//         definitions: [{
//           type: 'item',
//           description: 'description of item',
//           options: [{
//             type: 'item_1',
//           }, {
//             type: 'item_2',
//           }],
//         }],
//         alias: {},
//         existing: [],
//       };
//       const world: any = worldCreator(worldDefinition);

//       it('should throw an error', () => {
//         expect(world.createElement.bind({type: 'item2'})).to.throw(TypeError);
//       });
//     });

//     describe('simple element using alias', () => {
//       const worldDefinition: IWorldDefinition = {
//         definitions: [{
//           type: 'item_1',
//           description: 'description of item 1',
//           options: [{
//             type: 'item_1_1',
//           }, {
//             type: 'item_1_2',
//           }],
//         }, {
//           type: 'item_2',
//           description: 'description of item 2',
//           options: [{
//             type: 'item_2_1',
//           }, {
//             type: 'item_2_2',
//           }],
//         }],
//         alias: {
//           item: ['item_1', 'item_2'],
//         },
//         existing: [],
//       };
//       const world: any = worldCreator(worldDefinition);

//       it('should return a new element', () => {
//         const related: IRelatedDefinition = { type: 'item' };
//         const subject: IElementDefinition = world.createElement(related);

//         expect(subject.type).to.be.oneOf(['item_1_1', 'item_1_2', 'item_2_1', 'item_2_2']);
//         // expect(subject.description).to.eql('description of item');
//         expect(subject.related).to.be.undefined;
//         expect(subject.options).to.be.undefined;
//       });
//     });
//   });

//   // describe('related element', () => {
//   //   const worldDefinition: IWorldDefinition = {
//   //     definitions: [{
//   //       type: 'npc',
//   //       description: 'no player character',
//   //       related: {
//   //         item: [{
//   //           type: 'item_1',
//   //         }, {
//   //           type: 'item_2',
//   //         }],
//   //       },
//   //     }, {
//   //       type: 'item_1',
//   //       description: 'description of item 1',
//   //       options: [{
//   //         type: 'item_1_1',
//   //       }, {
//   //         type: 'item_1_2',
//   //       }],
//   //     }, {
//   //       type: 'item_2',
//   //       description: 'description of item 2',
//   //       options: [{
//   //         type: 'item_2_1',
//   //       }, {
//   //         type: 'item_2_2',
//   //       }],
//   //     }],
//   //     alias: {},
//   //     existing: [],
//   //   };
//   //   const world: any = worldCreator(worldDefinition);

//   //   it('should return a new element', () => {
//   //     const related: IRelatedDefinition = { type: 'npc' };
//   //     const subject: IElementDefinition = world.createElement(related);

//   //     expect(subject.type).to.be('npc');
//   //     // expect(subject.description).to.eql('description of item');
//   //     expect(subject.related).to.not.be.undefined;
//   //     expect(subject.related.item).to.not.be.undefined;
//   //     expect(subject.related.item.type).to.be.oneOf(['item_1_1', 'item_1_2', 'item_2_1', 'item_2_2']);
//   //     expect(subject.options).to.be.undefined;
//   //   });
//   // });

//   it('should return true', () => {
//     expect(true).to.be.true;
//   });
// });
