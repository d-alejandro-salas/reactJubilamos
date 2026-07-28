// src/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AppRoutes from './routes/Routes';
import Buttons from './components/Buttons';
import ScrollComponent from './components/atoms/ScrollComponent';
import DefaultSeo from './components/seo/DefaultSeo'; 

const App = () => (
  <Router>
    <DefaultSeo />
    <ScrollComponent />
    <Header />
    <AppRoutes />
    <Footer />
    <Buttons />
  </Router>
);

export default App;
