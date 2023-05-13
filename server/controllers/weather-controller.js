const weatherService = require('../service/weather-service');
const ApiError = require('../exceptions/api-error');

class WeatherController {
  async create(req, res, next) {
    try {
      const data = req.body;
      const weather = await weatherService.create(data)
      return res.json(weather);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new WeatherController();
