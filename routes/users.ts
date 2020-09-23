import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = Router();

/**
 * @swagger
 * /:
 *  get:
 *    description: タイトルを返却する
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: タイトル
 */
router.get('/', UserController);

export default router;
