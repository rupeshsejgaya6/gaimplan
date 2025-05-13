import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: any): { status: string, message: string, data: object } {
    return this.appService.getHello(req.query);
  }

  @Post()
  @HttpCode(200)
  getHelloPost(@Req() req: any): { status: string, message: string, data: object } {
    return this.appService.getHello(req.body);
  }
}
