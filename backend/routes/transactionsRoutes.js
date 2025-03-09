// transactionsRoutes.js 
import express from 'express';
import { Transaction } from '../models/transactionsModels.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

export default router;
