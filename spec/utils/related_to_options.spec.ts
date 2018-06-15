// /* tslint:disable no-unused-expression */
// import { expect } from 'chai';
// import * as R from 'ramda';
// import uuidv1 from 'uuid/v1';
// import {
//   ERandomOption,
//   IAliasDefinition,
//   IElement,
//   IElementDefinition,
//   IRelatedDefinition,
//   IWorldDefinition,
// } from '../../src/typings';
// import {relatedToOptions} from '../../src/utils';

// describe('Utils#relatedToOptions', () => {
//   describe('from definition', () => {
//     const options: IElementDefinition[] = [{
//       type: 'item_1',
//     }, {
//       type: 'item_2',
//     }, {
//       type: 'item_3',
//     }];
//     const definitions: IElementDefinition[] = [{
//       type: 'item',
//       options,
//     }];

//     it('should return options from definition', () => {
//       const related: IRelatedDefinition = {
//         type: 'item',
//       };

//       expect(relatedToOptions(definitions, [])(related)).to.eql(options);
//     });
//   });

//   describe('from existing', () => {
//     const existing: IElement[] = [{
//       type: 'item',
//       guid: uuidv1(),
//     }, {
//       type: 'item2',
//       guid: uuidv1(),
//     }, {
//       type: 'item',
//       guid: uuidv1(),
//     }];

//     it('should return options from existing', () => {
//       const related: IRelatedDefinition = {
//         type: 'item',
//         random: ERandomOption.exists,
//       };

//       expect(relatedToOptions([], existing)(related)).to.eql(
//         R.filter(R.propEq('type', 'item'), existing),
//       );
//     });
//   });
// });
