import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/account.interface';
import { CreateAccountDTO } from './dto/create-account.dto';

@Injectable()
export class AccountService {
    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>) { }

    async getAccounts(): Promise<Account[]> {
        const accounts = await this.accountModel.find().exec();
        return accounts;
    }

    async addAccount(createAccountDTO: CreateAccountDTO): Promise<Account> {
        const newAccount = await this.accountModel(createAccountDTO);
        return newAccount.save();
    }
}
