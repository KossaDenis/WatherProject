import React from 'react'
import Card from './card'
import s from './day.module.scss'

const Day = () => {
    const days = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon: 'sun',
            temp_day: '+12°',
            temp_night: '+10°',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon: 'sun',
            temp_day: '+16°',
            temp_night: '+5°',
            info: 'Облачно'
        }
    ]
    return (
        <div className={s.dayBlock}>
            {days.map((day) => (<Card day={day} key={day.day} />))}
        </div>
    )
}

export default Day