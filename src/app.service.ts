import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';
import { CacheService } from './core/cache/cache.service';

@Injectable()
export class AppService {
  constructor(
    private readonly logger: LoggerService,
    private cache: CacheService,
  ) {}
  async getHello() {
    this.logger.log('called the getHello fn', AppService.name, {
      userId: 123,
      isPremium: true,
    });
    await this.cache.set('key', 'ducci', 1000);
    const value = await this.cache.get('key');
    console.log('valueeeeeefromcache', value);
    return 'Hello World!';
  }
}
