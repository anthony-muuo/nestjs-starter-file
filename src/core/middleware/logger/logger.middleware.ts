/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from 'src/core/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}
  use(req: Request, res: Response, next: () => void) {
    const start = Date.now();
    const { url, method, query, body } = req;
    //when http responses finishes do this below
    res.on('finish', () => {
      const responseTime = Date.now() - start;
      const logData = {
        url,
        method,
        query,
        body,
      };
      const message = `${method} ${url} ${res.statusCode} ${responseTime}ms`;
      const { statusCode } = res;
      if (statusCode >= 500) {
        this.logger.error(message, undefined, LoggerMiddleware.name, logData);
      } else if (statusCode >= 400) {
        this.logger.warn(message, LoggerMiddleware.name, logData);
      } else {
        this.logger.log(message, LoggerMiddleware.name, logData);
      }
    });
    next();
  }
}
