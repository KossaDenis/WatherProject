import React from 'react'
import { Routes, Route } from 'react-router-dom';
import home from './pages/home/components/home'
import MonthStatistics from './pages/home/MonthStatistics/components copy/MonthStatistics'


const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact Component={home} />
        <Route path='/monthStatistics' exact Component={MonthStatistics} />
      </Routes>
    </div>
  )
}

export default App