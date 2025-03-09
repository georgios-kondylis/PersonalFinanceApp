// transactionsModels.js
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  avatar: { type: String, default: "https://i.ibb.co/DHXf7qkf/default.jpg"},
  name: { type: String, required: true },
  category: { type: String, default: "General" },
  date: { type: Date, default: Date.now }, // Auto-fill with the current date
  amount: { type: Number, required: true },
  recurring: { type: Boolean, default: false },
});

// Create & export the model
export const Transaction = mongoose.model('Transaction', transactionSchema, 'transactions'); // 3rd param ensures it connects to the 'transactions' collection
