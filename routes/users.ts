import { Router, Request, Response } from 'express';

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
router.get('/', (req: Request, res: Response) => res.send('respond with a resource'));

export default router;