const { Schema, model } = require('mongoose');

/**
 * * 
 */
const WeatherSchema = new Schema({
  date: { type: Number, required: true },
  time: { type: Number, required: true },
  temp: { type: Number, required: true },
  pressure: { type: Number, required: true },
  humidity: { type: Number, required: true },
  wind: { type: Number, required: true },
  town: { type: String, required: true },
});

module.exports = model('Weather', WeatherSchema);
