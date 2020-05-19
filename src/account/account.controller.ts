import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDTO } from './dto/create-account.dto';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) { }
    
    @Get('list')
    async getAccounts(@Res() res) {
        const accounts = await this.accountService.getAccounts();
        return res.status(HttpStatus.OK).json(accounts);
    }

    @Post('/create')
    async addAccount(@Res() res, @Body() createAccountDTO: CreateAccountDTO)  {
        const newAccount = await this.accountService.addAccount(createAccountDTO);
        return res.status(HttpStatus.OK).json({
            message: "Account created!",
            account: newAccount
        })
    }
}
