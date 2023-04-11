import React, { useEffect, useState } from 'react'
import './weather_box.css'
import windImg from '../../../img/wind.png'
import humidity from '../../../img/humidity.png'
import pressure from '../../../img/atmospheric.png'
import rain from '../../../img/rain.png'
import cloud from '../../../img/cloud.png'
import BackClear from '../../../img/backClear.jpg'
import BackRain from '../../../img/backRain.jpg'
import BackClouds from '../../../img/backClouds.jpg'
import Form from '../../forms/form'
import snow from '../../../img/snow.png'
import backSnow from '../../../img/backSnow.jpg'
import clear from '../../../img/clear.png'
import error from '../../../img/error.png'

function Weather_box(props) {
    const [sign, setSign] = useState('')
    const [signFeelsLike, setSignFeelsLike] = useState('')
    const [iconWeathr, setIconWeather] = useState('')
    const [weatherBackground, setWeatherBackground] = useState()
    const [hasData, setHasData] = useState();


    useEffect(() => {
        if (props.data?.main?.temp?.toString().charAt(0) !== "-") {
            setSign("+")
        } else {
            setSign("")
        }
    }, [props.data?.main?.temp])

    useEffect(() => {
        if (props.data?.main?.feels_like?.toString().charAt(0) !== "-") {
            setSignFeelsLike("+")
        } else {
            setSignFeelsLike("")
        }
    }, [props.data?.main?.feels_like])

    useEffect(() => {
        if (props.data?.weather?.[0]?.main) {
            switch (props.data.weather[0].main) {
                case 'Rain':
                    setIconWeather(rain);
                    break;
                case 'Clouds':
                    setIconWeather(cloud);
                    break;
                case 'Snow':
                    setIconWeather(snow);
                    break;
                case 'Clear':
                    setIconWeather(clear);
                    break;
                default:
                    setIconWeather(clear);
            }
        }
    }, [props.data?.weather?.[0]?.main])

    useEffect(() => {
        if (props.data?.weather?.[0]?.main) {
            switch (props.data.weather[0].main) {
                case 'Rain':
                    setWeatherBackground(BackRain);
                    break;
                case 'Clouds':
                    setWeatherBackground(BackClouds);
                    break;
                case 'Snow':
                    setWeatherBackground(backSnow);
                    break;
                case 'Clear':
                    setWeatherBackground(BackClear);
                    break;
                default:
                    setWeatherBackground(BackClear);
            }
        }
    }, [props.data?.weather?.[0]?.main])

    useEffect(() => {
        if (!props.data.main) {
            setHasData(false);
            
        } else {
            setHasData(true);
        }
    }, [props.data]);

    function setData() {
        setHasData(true)
        props.setName('Москва')
    }
    return (
        <div className='weather_box'>
            <img className='weather_background' src={weatherBackground} alt="" />
            {hasData ? (
                <div>
                    <div className="weather_info">
                        <div className="titleAndForm">
                            <h1 className='title'>{props.data.name}</h1>
                            <Form handleCityChange={props.handleCityChange} name={props.name} />
                        </div>
                        <div className="temperatureInfo">
                            <p className='temperature'>{sign}{Math.round(props.data?.main?.temp)}°</p>
                            <img className='iconWeathr' src={iconWeathr} alt="" />
                            <div className='weather'>
                                <p className='weatherText'>{props.data?.weather?.[0]?.description}</p>
                                <p className='feelsLike'>Ощущается как {signFeelsLike}{Math.round(props.data?.main?.feels_like)}°</p>
                            </div>
                        </div>
                        <div className='addInform'>
                            <div className="addInformBox">
                                <img className='weatherImg' src={windImg} alt="" />
                                <p className='wind'>{props.data?.wind?.speed} м/с</p>
                            </div>
                            <div className="addInformBox">
                                <img className='weatherImg' src={humidity} alt="" />
                                <p className='humidity'>{props.data?.main?.humidity} %</p>
                            </div>
                            <div className="addInformBox">
                                <img className='weatherImg' src={pressure} alt="" />
                                <p className='pressure'>{props.data?.main?.pressure} мм рт. ст.</p>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className='styleError'>
                    <img className='imgError' src={error} alt="" />
                    <p className='errorText'>{props.data.message}</p>
                    <button onClick={setData} className='errorButton'>Okey</button>
                </div>
            )}

        </div>
    )
}

export default Weather_box