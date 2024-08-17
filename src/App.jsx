// src/utils/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AppRoutes from './routes/Routes';
import Buttons from './components/Buttons';

const App = () => (
  <Router>
    <Header />
    <AppRoutes />
    <Footer />
    <Buttons />
  </Router>
);

export default App;
