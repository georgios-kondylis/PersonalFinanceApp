import mongoose from 'mongoose';

const balanceSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
});

export const Balance = mongoose.model('Balance', balanceSchema, 'balance'); //3rd = Collection name: 'balance'
//                                     BalanceModel