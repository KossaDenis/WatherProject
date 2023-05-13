const { Schema, model } = require('mongoose');

const TownWeatherSchema = new Schema({
  townId: { type: Schema.Types.ObjectId, ref: 'Town' },
  weatherId: { type: Schema.Types.ObjectId, ref: 'Weather' }
});

module.exports = model('TownWeather', TownWeatherSchema);
