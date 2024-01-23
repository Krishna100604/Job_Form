// routes/position.js
const express = require('express');
const router = express.Router();
// const Position = require("../Models/Position");

router.post('/', async (req, res) => {
  const { position } = req.body;

  try {
    // Create a new position document
    const newPosition = new Position({ positionName: position });

    // Save the position document to MongoDB
    await newPosition.save();

    res.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
