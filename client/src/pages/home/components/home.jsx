import React, { useEffect, useState } from 'react';
import Header from '../../../shared/header/header';
import Tabs from './Days/tabs';
import s from './home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import TimeAPI from './TimeAPI/TimeAPI';
import WeatherAPI from './WatherAPI/WeatherAPI';
import WeatherService from '../../../services/WeatherService';
import WeatherModel from '../../../models/WeatherModel';
import Archive from '../archive/archive';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [city, setCity] = useState('Тирасполь');
  const [lon, setLon] = useState()
  const [lat, setLat] = useState()
  const [time, setTime] = useState()
  const [weather, setWeather] = useState(null);
  const API_Key = '699a32a6da04fd9ad1d72a9df5226b4d';
  const [showArchive, setShowArchive] = useState(false);

  const isWeatherLoaded = weather !== null;

  let d = time && time.formatted
  const date = new Date(d);
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDateString = `${day}`;

  const apiTime = time && time.formatted;
  const myTime = new Date(apiTime);
  const hours = myTime.getHours().toString().padStart('0', 2);
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}.${minutes}`;

  const navigate = useNavigate()

  const handleButtonClick = () => {
    const cities = ['Григориополь', 'Днестровск', 'Дубоссары', 'Каменка', 'Рыбница', 'Слободзея', 'Тирасполь'];

    cities.forEach((city) => {
      WeatherAPI(city, API_Key) // Функция для получения данных о погоде для каждого города
        .then((weatherData) => {
          WeatherService.create(new WeatherModel(
            formattedDateString,
            formattedTime,
            Math.round(weatherData?.main.temp),
            weatherData?.main.pressure,
            weatherData?.main.humidity,
            weatherData?.wind.speed,
            city
          ))
            .then(() => {
              console.log(`Данные для города ${city} занесены в базу данных`);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  if (showArchive) {
    return <Archive weather={weather} city={city} />;
  }


  return (
    <div className={s.homeBlock}>
      <Header setCity={setCity} cityName={city} />
      <div className={s.homeBlockTop}>
        <ThisDay weather={weather} time={time} />
        <ThisDayInfo weather={weather} />
      </div>
      <WeatherAPI city={city} API_Key={API_Key} setWeather={setWeather} setLon={setLon} setLat={setLat} />
      {isWeatherLoaded && <TimeAPI city={city} setTime={setTime} time={time} lon={lon} lat={lat} />}
      <button onClick={handleButtonClick}>Записать данные в БД</button>
    </div>
  )
}

export default Home;


