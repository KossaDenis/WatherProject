import React, { useState, useEffect } from 'react';
import s from './header.module.scss';
import logo from '../../assets/img/logo/weather.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ setCity }) => {
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
    }
  }, [selectedCity, setCity]);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const navigate = useNavigate()

  const toggleArchive = () => {
    navigate('/archive');
 };

  return (
    <header className={s.header}>
      <div className={s.leftBlock}>
        <img className={s.logo} src={logo} alt="" />
        <h1 className={s.title}>Погода</h1>
      </div>
      <div>
        <button onClick={toggleArchive} className={s.buttonArchive}>Архив</button>
      </div>
      <div className={s.rightBlock}>
        <form>
          <select
            className={s.select}
            value={selectedCity}
            onChange={handleChange}
          >
            <option value="">Выберите город</option>
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
    </header>
  );
};

export default Header;
