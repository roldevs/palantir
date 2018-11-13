import express from 'express';
import foldersApiController from './controller/api/folders';
import localeFolder from './controller/api/folders/locale';
import nsFolder from './controller/api/folders/ns';
import typeFolder from './controller/api/folders/type';
import randomApiController from './controller/api/random';

const router = express.Router();
const randomController = randomApiController();

router.route('/types.json').get(foldersApiController(localeFolder()).index);
router.route('/types/:locale.json').get(foldersApiController(nsFolder()).index);
router.route('/types/:locale/:ns.json').get(foldersApiController(typeFolder()).index);
router.route('/random/:locale/:ns/:type.json').get(randomController.index);
router.route('/random/:id.json').get(randomController.byId);

export default router;
