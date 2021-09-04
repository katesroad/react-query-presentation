import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { path, method, query } = req;

    console.log(method, path);

    if (['PATCH', 'POST', 'PUT'].includes(method)) {
      console.log(`with data:\n`, req.body);
    }

    if (['GET'].includes(method)) {
      console.log(`with query:\n`, query);
    }

    next();
  }
}
