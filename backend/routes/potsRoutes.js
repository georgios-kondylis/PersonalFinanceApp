// potsRoutes
import express from 'express';
import { Pots } from '../models/pots.js';

const router = express.Router();

// GET all pots
router.get('/', async (req, res) => {
  try {
    const pots = await Pots.find();
    res.json(pots);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pots' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, target, total, theme, themeName } = req.body;

    if (!name || !target || !theme || !themeName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newPot = new Pots({
      name,
      target,
      total: total || 0, // Default value if not provided
      theme,
      themeName,
    });

    const savedPot = await newPot.save();
    res.status(201).json(savedPot);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create pot', details: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from URL
    const { name, target, theme, themeName } = req.body; // Get new data from request body

    const updatedPot = await Pots.findByIdAndUpdate(
      id,
      { name, target, theme, themeName },
      { new: true } // Return the updated document
    );

    if (!updatedPot) { return res.status(404).json({ message: "Pot not found" }); }

    res.json(updatedPot); // Send back the updated pot
  } catch (error) {
    console.error("Error updating pot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})
// Add money to a pot
router.put('/add-money/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from URL
    const { amount } = req.body; // Get the amount from the request body

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount to add' });
    }

    const updatedPot = await Pots.findByIdAndUpdate(
      id,
      { $inc: { total: amount } }, // Increment the pot total by the amount
      { new: true } // Return the updated document
    );

    if (!updatedPot) {
      return res.status(404).json({ message: "Pot not found" });
    }

    res.json(updatedPot); // Send back the updated pot
  } catch (error) {
    console.error("Error adding money to pot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put('/withdraw/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount to withdraw' });
    }

    const pot = await Pots.findById(id);
    if (!pot) {
      return res.status(404).json({ message: "Pot not found" });
    }

    if (pot.total < amount) {
      return res.status(400).json({ error: 'Insufficient funds in the pot' });
    }

    const updatedPot = await Pots.findByIdAndUpdate(
      id,
      { $inc: { total: -amount } }, // Decrement the pot total
      { new: true } // Return the updated document
    );

    res.json(updatedPot); // Send back the updated pot
  } catch (error) {
    console.error("Error withdrawing money from pot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from URL
    const potToDelete = await Pots.findByIdAndDelete(id);
    if (!potToDelete) {
      return res.status(404).json({ message: "Pot not found" });
    }
    // Send a success message after deletion
    res.status(200).json({ message: "Pot deleted successfully" });

  } catch (error) {
    console.error("Error deleting pot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


export default router;
