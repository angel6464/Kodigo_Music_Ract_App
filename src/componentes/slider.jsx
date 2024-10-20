import React from 'react';
import '../index.css';

function Slider() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li className="active"><i className="fas fa-home"></i>Inicio</li>
          <li><i className="fas fa-video"></i>Shorts</li>
          <li><i className="fas fa-user-plus"></i>Suscripciones</li>
        </ul>
        <br />
        <hr />
        <br />
        <ul className='lista-nombresCanales-sliders'>
          <li><i className="fas fa-history"></i>Historial</li>
          <li><i className="fas fa-list"></i>Lista Reproducción</li>
          <li><i className="fas fa-film"></i>Mis Videos</li>
          <li><i className="fas fa-podcast"></i>Tus Podcasts</li>
          <li><i className="fas fa-clock"></i>Ver Más Tarde</li>
          <li><i className="fas fa-thumbs-up"></i>Videos</li>
          <li><i className="fas fa-file-video"></i>Tus Clips</li>
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
