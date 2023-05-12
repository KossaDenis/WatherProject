import React, { useState } from 'react';
import s from './header.module.scss';
import logo from '../../assets/img/logo/weather.png';
import { useEffect } from 'react';

const Header = ({ setCity, cityName }) => {
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Введите город')

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setCity(value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (cityName !== true) {
      setPlaceholder('error')
    }
    if(cityName){
      setPlaceholder('Введите город')
    }
  }, [cityName])

  return (
    <header className={s.header}>
      <div className={s.leftBlock}>
        <img className={s.logo} src={logo} alt="" />
        <h1 className={s.title}>Погода</h1>
      </div>
      <div className={s.rightBlock}>
        <input
          placeholder={placeholder}
          className={s.input}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </header>
  );
};

export default Header;
