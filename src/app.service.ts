import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data): {status: string, message: string, data: object} {
    return {
      status: 'success',
      message: 'Hello World!',
      data
    };
  }
}
