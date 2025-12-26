import { Injectable, LoggerService as NestLogger } from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLogger {
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

  warn(message: string) {
    console.warn(message);
  }
}
