import React, { useState } from 'react';
import Day from './day';
import s from './day.module.scss';

const Tabs = ({ dataMongo }) => {
    const [selectedCity, setSelectedCity] = useState('ПМР');
    const [showAllData, setShowAllData] = useState(false);
    const [showDataOneDay, setShowDataOneDay] = useState(false)
    const [dataThreeDay, setDataThreeDay] = useState(false);
    const [showDateLastWeek, setShowDateLastWeek] = useState(false)

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setDataThreeDay(false); 
    };

    const handleShowAllData = () => {
        setShowAllData(true);
        setDataThreeDay(false); 
        setShowDateLastWeek(false)
    }

    const showOneDay = () => {
        setShowAllData(false);
        setShowDataOneDay(true);
        setDataThreeDay(false); 
    }

    const showDataThreeDay = () => {
        setDataThreeDay(true);
        setShowDataOneDay(false)
    }

    const showLastWeek = () => {
        setShowDateLastWeek(true)
        setShowAllData(false);
        setDataThreeDay(false); 
    }

    return (
        <div className={s.tabsBlock}>
            <div className={s.tabsContent}>
                <div className={s.buttons}>
                    <button onClick={handleShowAllData} className={s.button}>Все данные</button>
                    <button onClick={showOneDay} className={s.button}>За прошлый день</button>
                    <button onClick={showDataThreeDay} className={s.button}>За 3 дня</button>
                    <button onClick={showLastWeek} className={s.button}>За неделю</button>
                </div>
                <div className={s.rightBlock}>
                    <form>
                        <select className={s.select} onChange={handleCityChange} defaultValue='ПМР'>
                            <option value="ПМР">ПМР</option>
                            <option value="Григориополь">Григориополь</option>
                            <option value="Днестровск">Днестровск</option>
                            <option value="Дубоссары">Дубоссары</option>
                            <option value="Каменка">Каменка</option>
                            <option value="Рыбница">Рыбница</option>
                            <option value="Слободзея">Слободзея</option>
                            <option value="Тирасполь">Тирасполь</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className={s.dateBlock}>
                <Day dataMongo={dataMongo} city={selectedCity} showDataOneDay={showDataOneDay} showAllData={showAllData} dataThreeDay={dataThreeDay} showDateLastWeek={showDateLastWeek}/>
            </div>
        </div>
    );
};

export default Tabs;
