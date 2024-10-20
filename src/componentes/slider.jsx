import React from 'react';
import '../index.css';

function Slider() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
      <ul>
  <li className="active"><i className="fas fa-house-user"></i> Inicio</li>
  <li><i className="fas fa-music"></i> New Musica</li>
  <li><i className="fas fa-heart"></i> Favoritos</li>
</ul>
<br />
<hr />
<br />
<ul className='lista-nombresCanales-sliders'>
  <li><i className="fas fa-clock-rotate-left"></i> Historial</li>
  <li><i className="fas fa-list-alt"></i> Lista Reproducción</li>
  <li><i className="fas fa-headphones"></i> Mi Musica</li>
  <li><i className="fas fa-podcast"></i> Tus Podcasts</li>
  <li><i className="fas fa-clock"></i> Ver Más Tarde</li>
  <li><i className="fas fa-heart"></i> Favoritos</li>
  <li><i className="fas fa-video"></i> Tus Clips</li>
</ul>
        <br />
        <hr />
        <br />
        <ul className='lista-nombresCanales-sliders'>
          <li>
            <span className="user-image">
              <img src="/img/img1.jpg" alt="Canal 1" />
            </span>
            Max
          </li>
          <li>
            <span className="user-image">
              <img src="/img/img2.jpg" alt="Canal 2" />
            </span>
            Lex
          </li>
          <li>
            <span className="user-image">
              <img src="/img/img3.jpg" alt="Canal 3" />
            </span>
            Zed
          </li>
          <li>
            <span className="user-image">
              <img src="/img/img4.jpg" alt="Canal 4" />
            </span>
            Jin
          </li>
          <li>
            <span className="user-image">
              <img src="/img/img5.jpg" alt="Canal 5" />
            </span>
            Leo
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Slider;
