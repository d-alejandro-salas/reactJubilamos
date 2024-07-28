// src/utils/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/Routes';
import { ScrollToTop, ScrollToTopButton } from './components/ScrollComponents';

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <AppRoutes />
    <Footer />
    <ScrollToTopButton />
  </Router>
);

export default App;
