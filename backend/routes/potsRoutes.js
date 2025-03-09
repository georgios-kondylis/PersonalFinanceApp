// potsRoutes.js 
import express from 'express';
import { Pots } from '../models/pots.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pots = await Pots.find();
    res.json(pots);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pots' });
  }
});

export default router;
