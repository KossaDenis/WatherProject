import React from 'react'
import s from './day.module.scss'

const Card = ({day}) => {
  return (
    <div className={s.cardBlock}>
        <h3 className={s.title}>{day.day}</h3>
        <p className={s.date}>{day.day_info}</p>
        <img className={s.icon} src="" alt="icon" />
        <p className={s.tempDay}>{day.temp_day}</p>
        <p className={s.tempNight}>{day.temp_night}</p>
        <p className={s.info}>{day.info}</p>
    </div>
  )
}

export default Card