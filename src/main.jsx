import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.scss'; // Sass file is imported.
import App from './App';

// A root is created with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
