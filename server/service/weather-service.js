const WeatherModel = require('../models/weather-model');
const ApiError = require('../exceptions/api-error');

class WeatherService {
  async create(data) {
    const weather = await WeatherModel.create(data)
    return weather
  }
}

module.exports = new WeatherService();
