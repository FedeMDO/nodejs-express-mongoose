import express, { NextFunction, Request, Response } from 'express';
import { GreetingModel } from '../models/greeting';

// Middlewares
import { myMiddleware } from '../middlewares/sample';

const router = express.Router();

// Dummy application routing
router.get('/:id', myMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  // FIXME move db CRUDs to a service when we have more endpoints
  const doc = new GreetingModel({
    name: 'hello world',
    message: 'Hello World!',
  });
  await doc.save();

  const greeting = await GreetingModel.findById(doc._id);

  res.status(200).send({ message: greeting?.message });
});

export default router;
