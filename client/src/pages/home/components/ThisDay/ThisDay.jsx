import React, { useEffect, useState } from 'react';
import s from './ThisDay.module.scss';
import mainly_cloudy from '../../../../assets/img/weatherIcon/mainly_cloudy.svg';
import sun from '../../../../assets/img/weatherIcon/Sun.svg';
import rain from '../../../../assets/img/weatherIcon/rain.svg';
import small_rain from '../../../../assets/img/weatherIcon/small_rain.svg';

const ThisDay = ({ weather, time }) => {
    const [imgUrl, setImgUrl] = useState(sun);

    useEffect(() => {
        switch (weather && weather.weather[0].main) {
            case 'Clouds':
                setImgUrl(mainly_cloudy);
                break;
            case 'Clear':
                setImgUrl(sun);
                break;
            case 'Rain':
                setImgUrl(rain);
                break;
            case 'Drizzle':
                setImgUrl(small_rain);
                break;
            default:
                break;
        }
    }, [weather]);

    return (
        <div className={s.thisDayBlock}>
            <div className={s.topBlock}>
                <div className={s.topBlockInfo}>
                    <div className={s.temp}>{Math.round(weather && weather.main.temp)}°</div>
                    <div className={s.day}>Сегодня</div>
                </div>
                <div className={s.topBlockImg}>
                    <img className={s.weatherIcon} src={imgUrl} alt="" />
                </div>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.time}>
                    Время: {time && time.formatted.slice(11, 16)}
                </div>
                <div className={s.city}>
                    Город: {weather && weather.name}
                </div>
            </div>
        </div>
    );
};

export default ThisDay;
