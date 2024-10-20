import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';  // Importa el componente principal
import Formulario from './componentes/formulario';  // Importa el formulario de autenticación

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra el contenido de App */}
        <Route path="/" element={<App />} />
        
        {/* Ruta para el formulario de autenticación */}
        <Route path="/formulario" element={<Formulario />} />
        
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default AppRouter;