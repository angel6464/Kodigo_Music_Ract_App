import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';  // Importa el archivo de rutas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />  {/* Utiliza AppRouter para gestionar las rutas */}
  </React.StrictMode>
);