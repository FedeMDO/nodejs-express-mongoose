import { Request, Response, NextFunction } from 'express';

export const myMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('passing throw myMiddleware');
  /* middleware logic */

  next();
};
