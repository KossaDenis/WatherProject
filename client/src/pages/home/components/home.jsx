import React, { useState } from 'react';
import Header from '../../../shared/header/header';
import Tabs from './Days/tabs';
import s from './home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import TimeAPI from './TimeAPI/TimeAPI';
import WeatherAPI from './WatherAPI/WeatherAPI';

const Home = () => {
  const [city, setCity] = useState('Тирасполь');
  const [lon, setLon] = useState()
  const [lat, setLat] = useState()
  const [time, setTime] = useState()
  const [weather, setWeather] = useState(null);
  const API_Key = '699a32a6da04fd9ad1d72a9df5226b4d';
  
  const isWeatherLoaded = weather !== null;

 

  return (
    <div className={s.homeBlock}>
      <Header setCity={setCity} cityName={city} />
      <div className={s.homeBlockTop}>
        <ThisDay weather={weather} time={time} />
        <ThisDayInfo weather={weather} />
      </div>
      <Tabs />
      <WeatherAPI city={city} API_Key={API_Key} setWeather={setWeather} setLon={setLon} setLat={setLat} />
      {isWeatherLoaded && <TimeAPI city={city} setTime={setTime} time={time} lon={lon} lat={lat} />}
    </div>
  )
}

export default Home;
