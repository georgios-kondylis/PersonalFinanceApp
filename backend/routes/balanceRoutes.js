// balanceRoutes.js
import express from 'express';
import { Balance } from '../models/balanceModel.js'; 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const balanceData = await Balance.find(); // Get all balances
    res.json(balanceData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch balance data' });
  }
});

export default router;
