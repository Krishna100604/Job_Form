// models/Position.js
const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  positionName: String,
});

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;
