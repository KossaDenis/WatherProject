const WeatherModel = require('../models/weather-model');
const ApiError = require('../exceptions/api-error');

class WeatherService {
  async create(data) {
    const weather = await WeatherModel.create(data)
    return weather
  }
  async getData(){
    const weathers = await WeatherModel.find()
    console.log(weathers);
    return weathers
  }
}

module.exports = new WeatherService();
