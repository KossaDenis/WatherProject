import React from 'react'
import s from '../ThisDayInfo/ThisDayInfo.module.scss'
import tempIcon from '../../../../assets/img/weatherIcon/temp.svg'
import pressure from '../../../../assets/img/weatherIcon/pressure.svg'
import precipitation from '../../../../assets/img/weatherIcon/precipitation.svg'
import wind from '../../../../assets/img/weatherIcon/wind.svg'
import cloud from '../../../../assets/img/weatherIcon/cloud.svg'

const ThisDayInfo = ({weather}) => {
    return (
        <div className={s.thisDayInfoBlock}>
            <img className={s.cloud} src={cloud} alt="" />
            <div className={s.tempBlock + ' ' + s.weatherIconBlock}>
                <div className={s.iconBlock}>
                    <img className={s.iconWeather} src={tempIcon} alt="" />
                </div>
                <p className={s.textIcon}>Температура</p>
                <p className={s.addTextTemp}>{Math.round(weather && weather.main.temp)}° - ощущается как {Math.round(weather && weather.main.feels_like)}°</p>
            </div>
            <div className={s.pressureBlock + ' ' + s.weatherIconBlock}>
                <div className={s.iconBlock}>
                    <img className={s.iconWeather} src={pressure} alt="" />
                </div>
                <p className={s.textIcon}>Давление</p>
                <p className={s.addTextPressure}>{weather && weather.main.pressure} мм ртутного столба</p>
            </div>
            <div className={s.precipitationBlock + ' ' + s.weatherIconBlock}>
                <div className={s.iconBlock}>
                    <img className={s.iconWeather} src={precipitation} alt="" />
                </div>
                <p className={s.textIcon}>Влажность</p>
                <p className={s.addTextHumidity}>{weather && weather.main.humidity} %</p>
            </div>
            <div className={s.windBlock + ' ' + s.weatherIconBlock}>
                <div className={s.iconBlock}>
                    <img className={s.iconWeather} src={wind} alt="" />
                </div>
                <p className={s.textIcon}>Ветер</p>
                <p className={s.addTextWind}>{weather && weather.wind.speed} м/с</p>
            </div>
        </div>
    )
}

export default ThisDayInfo