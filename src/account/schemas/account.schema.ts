import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    name: String, 
    user: String
});