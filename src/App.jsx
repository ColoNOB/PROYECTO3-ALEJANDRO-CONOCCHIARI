import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cotizador from './Components/Cotizador';
import Historial from './Components/Historial';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cotizador />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

