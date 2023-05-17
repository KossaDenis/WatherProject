import React, { useEffect, useState } from 'react'
import s from './archive.module.scss'
import WeatherService from '../../../services/WeatherService';
import Tabs from '../components/Days/tabs';
import { useNavigate } from 'react-router-dom';


const Archive = ({weather, city }) => {

  const [dataMongo, setDataMongo] = useState();


  useEffect(() => {
    WeatherService.getData().then((res) => {
      setDataMongo(res)
    }).catch((err) => {
      console.log(err);
    })
  }, [weather])


  const navigate = useNavigate()

  const toggleMain = () => {
    navigate('/');
  };

  return (
    <div>
      <div className={s.header}>
        <div className={s.headerTitle}>Архив</div>
        <div className={s.boxButtonMain}>
          <button onClick={toggleMain} className={s.buttonMain}>Главная страница</button>
        </div>
      </div>
      {dataMongo && <Tabs dataMongo={dataMongo.data} city={city} />}
    </div>
  )
}

export default Archive