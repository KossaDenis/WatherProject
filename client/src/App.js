import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Archive from './pages/home/archive/archive';
import Home from './pages/home/components/home';

const App = () => {
  return (
    <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
    </div>
  );
};

export default App;
