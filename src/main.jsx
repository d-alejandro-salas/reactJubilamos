import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';  // ✅ nuevo
import './styles/Index.scss'; // estilo
import App from './App';

// Creamos el root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render principal
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
