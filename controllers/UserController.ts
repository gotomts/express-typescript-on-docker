import { Request, Response } from 'express';

const fetch = (req: Request, res: Response) => {
  try {
    res.send('respond with a resource');
  } catch (err) {
    res.status(409);
    res.json({
      message: err.toString(),
    });
  }
};

export default fetch;
