import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Put a smile on your face :D, your API is working!!!';
  }
}
