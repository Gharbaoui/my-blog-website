import { AppService } from './app.service';
import { LoginService } from './login.service';
export declare class AppController {
    private readonly appService;
    private readonly loginService;
    constructor(appService: AppService, loginService: LoginService);
    getHello(): string;
    getLoginMsg(): string;
}
