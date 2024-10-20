import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <header className="header">
      <img src="img/youtubeimg4.png" alt="" />
      <div className="search-container">
        <input type="text" placeholder="Buscar" className="search-bar" />
        <i className="fas fa-search search-icon"></i> {/* Ícono de lupa */}
      </div>
      <i className="fas fa-microphone microphone-icon iconomicrofono"></i> {/* Ícono de micrófono */}

      <Link to="/formulario">
      <button><i className="fas fa-user user-icon"></i> {/* Ícono de usuario */} </button> 
      </Link>
 
    </header>

    </>
  );
}

export default Header;