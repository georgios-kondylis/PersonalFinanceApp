import mongoose from "mongoose";

const budgetsSchema = new mongoose.Schema({
  category: { type: String, required: true },
  maximum: { type: Number, required: true, min: 0 },
  theme:{ type: String, required: true },
  themeName: { type: String, required: true }
})

export const Budgets = mongoose.model('BudgetsModel', budgetsSchema, 'budgets');