import React from 'react'
import s from './day.module.scss'

const Card = ({day}) => {
  return (
    <div className={s.cardBlock}>
        <h3 className={s.town}>Город: {day.town}</h3>
        <p className={s.date}>Дата: {day.date} Мая</p>
        <p className={s.time}>Время: {day.time}</p>
        <p className={s.temp}>Температура: {day.temp}°</p>
        <p className={s.pressure}>Давление: {day.pressure}мм</p>
        <p className={s.humidity}>Влажность: {day.humidity}%</p>
        <p className={s.wind}>Ветер: {day.wind}м/с</p>
    </div>
  )
}

export default Card