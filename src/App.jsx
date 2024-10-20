
import React from 'react';
import Header from './componentes/header';
import Listavideos from './componentes/listavideos';
import Slider from './componentes/slider';
import Listacanales from './componentes/listasCanales';
import Footerflotante from './componentes/Footerflotante';

function App() {
  return (
    <div className="app">
    <Header />
      <div className="content">
        <Slider/>
        <div className="main-content">
          <Listacanales/>
          <Listavideos />
        </div>
      </div>
      <Footerflotante/>
    </div>
  );
}
export default App;