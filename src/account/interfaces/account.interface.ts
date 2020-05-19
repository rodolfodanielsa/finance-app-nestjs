import { Document } from 'mongoose';

export interface Account extends Document {
    readonly name: String;
    readonly user: String;
}
