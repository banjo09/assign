import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  res.on('finish', () => {
    console.log(`${res.statusCode} ${res.statusMessage}`);
  });
  next();
};