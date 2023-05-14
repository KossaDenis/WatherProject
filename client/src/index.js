import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss'

import WeatherService from './services/WeatherService';
import WeatherModel from './models/WeatherModel';
WeatherService.create(new WeatherModel(1, 2, 3, 4, 5, 6, 'test')).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

WeatherService.getData().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
