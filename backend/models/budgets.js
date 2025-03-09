import mongoose from "mongoose";

const budgetsSchema = new mongoose.Schema({
  category: String,
  maximum: Number,
  theme: String
})

export const Budgets = mongoose.model('BudgetsModel', budgetsSchema, 'budgets');