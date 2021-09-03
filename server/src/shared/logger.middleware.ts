import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { path, method } = req;

    console.log(method, path);

    if (['PATCH', 'POST', 'PUT'].includes(path)) {
      console.log(`with data:\n`, req.body);
    }

    next();
  }
}
