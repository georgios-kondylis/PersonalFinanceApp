// budgetsRoutes.js
import express from 'express';
import { Budgets } from '../models/budgets.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const budgets = await Budgets.find();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch budgets' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { category, maximum, theme, themeName } = req.body;

    if (!category || !maximum || !theme || !themeName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newBudget = new Budgets({
      category,
      maximum,
      theme,
      themeName,
    });

    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create budget' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from URL
    const budgetToDelete = await Budgets.findByIdAndDelete(id); 
    if (!budgetToDelete) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json({ message: "Budget deleted successfully" });
  } catch (error) {
    console.error("Error deleting Budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



export default router;


// const budgetsSchema = new mongoose.Schema({
//   category: { type: String, required: true },
//   maximum:{ type: Number, required: true },
//   theme:{ type: String, required: true },
//   themeName: { type: String, required: true }
// })