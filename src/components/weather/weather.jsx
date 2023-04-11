import React, { useEffect, useState } from 'react';
import Weather_box from './weather_box/weather_box';

function Weather() {
    const API_KEY = 'ab8c680e37cab2bd4c4ccc7e1669294b'
    const [data, setData] = useState('');
    const [name, setName] = useState("Москва")

    const handleCityChange = (newCity) => {
        setName(newCity);
    }

    useEffect(() => {
        async function getInfoWeather() {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric&lang=ru`);
            const newData = await api_url.json();
            setData(newData);
        }
        getInfoWeather();
    }, [name]);
    console.log(data);
   

    return (
        <div>
            {data ? (
                <Weather_box data={data} setName={setName} name={name} handleCityChange={handleCityChange} />
            ) : (
                <div>Loading....</div>
            )}
        </div>
    );

}

export default Weather;
