import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}
  getHello() {
    this.logger.log('called the getHello fn');
    return 'hello world';
  }
}
