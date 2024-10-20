import React, { useState, useRef } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
function Listavideos() {
  const [activeAudio, setActiveAudio] = useState(null);
  const audioRefs = useRef([]);

  const videos = [
    { title: 'Rush-Music', views: '1M de visualizaciones', img: '/img/video1.jpg', audio: '/src/assets/rush.mp3' },
    { title: 'Clock- Ocarina Of Time', views: '500K de visualizaciones', img: '/img/video2.jpg', audio: '/src/assets/zelda.mp3' },
    { title: 'Mix-Stranger Things', views: '250K de visualizaciones', img: '/img/video3.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Music Rush', views: '100K de visualizaciones', img: '/img/video4.jpg', audio: '/src/assets/cash.mp3' },
    { title: 'Cash-Happy Music', views: '75K de visualizaciones', img: '/img/video5.jpg', audio: '/src/assets/mile.mp3' },
    { title: 'Epic - Song', views: '50K de visualizaciones', img: '/img/video6.jpg', audio: '/src/assets/epic.mp3' },
    { title: 'Título Video 7', views: '20K de visualizaciones', img: '/img/video7.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 8', views: '10K de visualizaciones', img: '/img/video8.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 9', views: '5K de visualizaciones', img: '/img/video9.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 10', views: '2K de visualizaciones', img: '/img/video10.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 11', views: '1K de visualizaciones', img: '/img/video11.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 12', views: '500 de visualizaciones', img: '/img/video12.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 13', views: '250 de visualizaciones', img: '/img/video13.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 14', views: '100 de visualizaciones', img: '/img/video14.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 15', views: '75 de visualizaciones', img: '/img/video15.jpg', audio: '/src/assets/stran.mp3' },
    { title: 'Título Video 16', views: '50 de visualizaciones', img: '/img/video16.jpg', audio: '/src/assets/stran.mp3' },
  ];

  const handleAudioClick = (index) => {
    // Si hay un audio activo y no es el que se va a reproducir, lo detiene
    if (activeAudio !== null && activeAudio !== index) {
      audioRefs.current[activeAudio].pause();
      audioRefs.current[activeAudio].currentTime = 0; // Reinicia el tiempo del audio
    }

    // Establece el nuevo audio activo
    setActiveAudio(index);
  };

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <div className="video-thumbnail">
            <img 
              src={video.img} 
              alt={`Thumbnail ${index + 1}`} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
          </div>
          <div className="video-texto">
            <h3>{video.title}</h3>
            <p>{video.views}</p>
          </div>

          {/* Añade el reproductor de audio para cada video */}
          <div className="audio-container" style={{ marginTop: '10px' }}>
            <audio 
              ref={el => audioRefs.current[index] = el} 
              controls 
              style={{ width: '100%', outline: 'none' }} 
              onPlay={() => handleAudioClick(index)} // Maneja el evento de reproducción
            >
              <source src={video.audio} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listavideos;
