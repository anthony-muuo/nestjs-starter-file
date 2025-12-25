import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    //environment is the name of the object property in config file
    console.log('YOOH', this.configService.get<string>('environment'));
    return 'Hello World!';
  }
}
