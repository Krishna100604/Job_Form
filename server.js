// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const positionSchema = new mongoose.Schema({
  name: String,
  position:String,
});
const jobSchema = new mongoose.Schema({
    jobPipeline: {
      type: String,
      required: true,
    },
  });
const PositionModel = mongoose.model('Position', positionSchema);
const Job = mongoose.model('Job', jobSchema);

app.post('/savePosition', async (req, res) => {
  const { position } = req.body;

  try {
    const newPosition = new PositionModel({ name: position });
    await newPosition.save();
    res.json({ success: true, message: 'Position saved successfully!' });
  } catch (error) {
    console.error('Error saving position:', error);
    res.status(500).json({ success: false, message: 'Error saving position' });
  }
});
app.post('/job', async (req, res) => {
    try {
      const { jobPipeline } = req.body;
  
      // Save job data to MongoDB
      const job = new Job({ jobPipeline });
      await job.save();
  
      res.status(201).json({ success: true, message: 'Job data saved successfully' });
    } catch (error) {
      console.error('Error saving job data:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
