import express from 'express';
import categoriesApiController from './controller/api/categories';
import searchApiController from './controller/api/search';
import foldersApiController from './controller/api/folders';
import localeFolder from './controller/api/folders/locale';
import nsFolder from './controller/api/folders/ns';
import typeFolder from './controller/api/folders/type';
import randomApiController from './controller/api/random';

const router = express.Router();
const randomController = randomApiController();
const categoriesController = categoriesApiController();
const searchController = searchApiController();

router.route('/types.json').get(foldersApiController(localeFolder()).index);
router.route('/types/:locale.json').get(foldersApiController(nsFolder()).index);
router.route('/types/:locale/:ns.json').get(foldersApiController(typeFolder()).index);
router.route('/random/:locale/:ns/:type.json').get(randomController.index);
router.route('/random/:id.json').get(randomController.byId);
router.route('/categories.json').get(categoriesController.index);
router.route('/categories/:id.json').get(categoriesController.show);
router.route('/search/:term.json').get(searchController.show);

export default router;
