import React, { useState } from 'react';
import Card from './card';
import s from './day.module.scss';

const Day = ({ dataMongo, city, showDataOneDay, showAllData, dataThreeDay, showDateLastWeek }) => {


    let days;

    let currentDateOneDay = new Date();
    let dayLastOne = currentDateOneDay.getDate() - 1

    let currentDate = new Date();
    let threeDaysAgo = currentDate.getDate() - 3;

    let currentDateWeek = new Date();
    let lastWeek = currentDate.getDate() - 7;

    if (city === 'ПМР') {
        days = dataMongo;
        if (showDataOneDay) {
            days = days.filter((day) => day.date.toString().slice(0, 2) == dayLastOne);
            if (showAllData) {
                days = dataMongo;
            }
        }
    } else {
        days = dataMongo.filter((day) => day.town === city);
        if (showDataOneDay) {
            days = days.filter((day) => day.date.toString().slice(0, 2) == dayLastOne);
            if (showAllData) {
                days = dataMongo;
                days = dataMongo.filter((day) => day.town === city);
            }

        }
    }
    if (dataThreeDay) {
        days = days.filter((day) => {
            return parseInt(day.date, 10) >= threeDaysAgo && parseInt(day.date, 10) < currentDate.getDate();
        });
    }

    if (showDateLastWeek) {
        days = days.filter((day) => {
            return parseInt(day.date, 10) >= lastWeek && parseInt(day.date, 10) < currentDateWeek.getDate();
        });
    }

    const sortedDays = days.sort((a, b) => new Date(a.date) - new Date(b.date));


    const hasData = dataMongo.some((item) => item.town === city);

    return (
        <div className={s.dayBlock}>
            {sortedDays.length != 0 ? (
                sortedDays.map((day) => (
                    <Card className={s.card} day={day} key={day._id} />
                ))
            ) : (
                <p className={s.emptyArray}>Данных нет для выбранного города</p>
            )}
        </div>
    );

};



export default Day;
