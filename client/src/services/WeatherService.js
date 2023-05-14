import $api from '../api';

export default class WeatherService {
  static create(weather) {
    return $api.post('/weather', weather);
  }
  static getData() {
    return $api.get('/weather')
  }
}