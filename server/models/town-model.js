const { Schema, model } = require('mongoose');

/**
 * * Город
 */
const TownSchema = new Schema({
  /**
   * * Название города
   */
  name: { type: String, unique: true, required: true },
});

module.exports = model('Town', TownSchema);
