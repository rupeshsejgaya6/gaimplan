import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: any): { status: string, message: string, data: object } {
    return this.appService.getHello(req.query);
  }

  @Post()
  getHelloPost(@Req() req: any): { status: string, message: string, data: object } {
    return this.appService.getHello(req.body);
  }
}
