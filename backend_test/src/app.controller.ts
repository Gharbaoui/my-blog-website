import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginService } from './login.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly loginService: LoginService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  getLoginMsg(): string {
    return this.loginService.login();
  }
}
