import React from 'react';
import s from './ThisDay.module.scss';
import sun from '../../../../assets/img/weatherIcon/Sun.svg';

const ThisDay = ({weather, time}) => {
    return (
        <div className={s.thisDayBlock}>
            <div className={s.topBlock}>
                <div className={s.topBlockInfo}>
                    <div className={s.temp}>{Math.round(weather && weather.main.temp)}°</div>
                    <div className={s.day}>Сегодня</div>
                </div>
                <div className={s.topBlockImg}>
                    <img className={s.weatherIcon} src={sun} alt="" />
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
