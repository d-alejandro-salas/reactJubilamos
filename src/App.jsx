// src/utils/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AppRoutes from './routes/Routes';
import Buttons from './components/Buttons';
import ScrollComponent from './components/atoms/ScrollComponent'; // Importa el componente correctamente

const App = () => (
  <Router>
    <ScrollComponent /> {/* Coloca el componente aquí para que funcione */}
    <Header />
    <AppRoutes />
    <Footer />
    <Buttons />
  </Router>
);

export default App;
