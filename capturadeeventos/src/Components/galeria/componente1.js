import React, { useState } from 'react';
import imagen1 from '../imagenes/imagen1';
import imagen2 from '../imagenes/imagen2';
import imagen3 from '../imagenes/imagen3';


function MostrarGaleria() {
    const [imagenActual, setImagenActual] = useState(0);
    const imagenes = [imagen1, imagen2, imagen3]; 
  
    const pulsarTecla = (event) => {
      if (event.key === 'ArrowLeft') {
        setImagenActual((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
      } else if (event.key === 'ArrowRight') {
        setImagenActual((prevIndex) => (prevIndex + 1) % imagenes.length);
      }
    };
  
    return (
      <div className="galeria" onKeyDown={pulsarTecla} tabIndex="0">
        <img src={imagenes[imagenActual]} alt="Imagen de la galería" />
      </div>
    );
  }
  
  export default MostrarGaleria;