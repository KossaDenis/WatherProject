import axios from 'axios';
import React, { useEffect } from 'react';

const WeatherAPI = ({ city, API_Key, setWeather, setLon, setLat }) => {
    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${API_Key}`);
            setWeather(response.data);
            setLon(response.data.coord.lon)
            setLat(response.data.coord.lat)
        };
        fetchWeatherData()
    }, [city]);

    return null;
};

export default WeatherAPI;
// https://pro.openweathermap.org/data/2.5/forecast/climate?q=London&appid=${API_Key}