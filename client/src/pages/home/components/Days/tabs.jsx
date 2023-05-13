import React from 'react'
import Day from './day'
import s from './day.module.scss'

const Tabs = () => {
    return (
        <div className={s.tabsBlock}>
            <div className={s.buttons}>
                <button className={s.button}>На неделю</button>
                <button className={s.button}>На месяц</button>
                <button className={s.button}>На 10 дней</button>
            </div>
            <div className={s.dateBlock}>
                <Day />
            </div>
        </div>
    )
}

export default Tabs