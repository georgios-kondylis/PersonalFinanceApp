import mongoose from 'mongoose';

const potsSchema = new mongoose.Schema({
  name: String,
  target: Number,
  total: Number,
  theme: String
});

export const Pots = mongoose.model('PotsModel', potsSchema, 'pots');
//                                  PotsModel
