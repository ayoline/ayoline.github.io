import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './CardPage';
import AllCards from './AllCards';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<AllCards />} />
        <Route exact path='/cardpage' element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;