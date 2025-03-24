// pots.js
import mongoose from 'mongoose';

const potsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true }, 
  total: { type: Number, default: 0 }, 
  theme: { type: String, required: true },
  themeName: { type: String, required: true },
});

export const Pots = mongoose.model('PotsModel', potsSchema, 'pots');
//                                  PotsModel
