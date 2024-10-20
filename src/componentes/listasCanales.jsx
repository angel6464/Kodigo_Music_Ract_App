import React from 'react';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function listaCanales() {
  return (
    <>
    <div className="channel-list">
      <div className="channel-item">
        <img src="/img/img1.jpg" alt="Canal 1" />
        <p>Max</p>
      </div>
      <div className="channel-item">
        <img src="/img/img2.jpg" alt="Canal 2" />
        <p>Lex</p>
      </div>
      <div className="channel-item">
        <img src="/img/img3.jpg" alt="Canal 3" />
        <p>Zed</p>
      </div>
      <div className="channel-item">
        <img src="/img/img4.jpg" alt="Canal 4" />
        <p>Jin</p>
      </div>
      <div className="channel-item">
        <img src="/img/img5.jpg" alt="Canal 5" />
        <p>Leo</p>
      </div>
      <div className="channel-item">
    <p><i className="fas fa-plus"></i></p>
  </div>
    </div>
    
    
  </>
  );
}

export default listaCanales;
