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

export default router;
