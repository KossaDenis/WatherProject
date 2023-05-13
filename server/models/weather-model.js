const { Schema, model } = require('mongoose');

/**
 * * 
 */
const WeatherSchema = new Schema({
  date: { type: Number, unique: true, required: true },
  time: { type: Number, unique: true, required: true },
  temp: { type: Number, unique: true, required: true },
  pressure: { type: Number, unique: true, required: true },
  humidity: { type: Number, unique: true, required: true },
  wind: { type: Number, unique: true, required: true },
});

module.exports = model('Weather', WeatherSchema);
