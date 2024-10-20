import React, { useState, useRef } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
function Listavideos() {
  const [activeAudio, setActiveAudio] = useState(null);
  const audioRefs = useRef([]);

  const videos = [
    { title: 'Rush Hour - DJ Max', views: '1M de visualizaciones', img: '/img/video1.jpg', audio: '/img/rush.mp3' },
    { title: 'Ocarina Tune - Lex', views: '500K de visualizaciones', img: '/img/video2.jpg', audio: '/img/zelda.mp3' },
    { title: 'Stranger Vibes - Max', views: '250K de visualizaciones', img: '/img/video3.jpg', audio: '/img/stran.mp3' },
    { title: 'Rush Beat - Zed', views: '100K de visualizaciones', img: '/img/video4.jpg', audio: '/img/cash.mp3' },
    { title: 'Happy Days - Jin', views: '75K de visualizaciones', img: '/img/video5.jpg', audio: '/img/mile.mp3' },
    { title: 'Epic Anthem - The Maestro', views: '50K de visualizaciones', img: '/img/video6.jpg', audio: '/img/epic.mp3' },
    { title: 'Rising Sun - Chill Beats', views: '20K de visualizaciones', img: '/img/video7.jpg', audio: '/img/stran.mp3' },
    { title: 'Moonlight - Luna Sound', views: '10K de visualizaciones', img: '/img/video8.jpg', audio: '/img/stran.mp3' },
    { title: 'Starlight - Cosmic Vibes', views: '5K de visualizaciones', img: '/img/video9.jpg', audio: '/img/stran.mp3' },
    { title: 'Dreamscape - Echo Dreamer', views: '2K de visualizaciones', img: '/img/video10.jpg', audio: '/img/stran.mp3' },
    { title: 'Ocean Breeze - Wave Riders', views: '1K de visualizaciones', img: '/img/video11.jpg', audio: '/img/stran.mp3' },
    { title: 'Sunset Drive - Chill Out Crew', views: '500 de visualizaciones', img: '/img/video12.jpg', audio: '/img/stran.mp3' },
    { title: 'City Lights - Night Grooves', views: '250 de visualizaciones', img: '/img/video13.jpg', audio: '/img/stran.mp3' },
    { title: 'Nightfall - Moon Shadows', views: '100 de visualizaciones', img: '/img/video14.jpg', audio: '/img/stran.mp3' },
    { title: 'Echoes - Sound Masters', views: '75 de visualizaciones', img: '/img/video15.jpg', audio: '/img/stran.mp3' },
    { title: 'Golden Hour - Sunset Mix', views: '50 de visualizaciones', img: '/img/video16.jpg', audio: '/img/stran.mp3' },
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
