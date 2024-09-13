import React, { useState } from 'react';
import './botones.css'

function Botones() {
    // Definir color inicial del botón
    const [color, setColor] = useState('white');

    // Función para manejar cuando se hace un click sobre el botón
    const manejarUnClick = () => {
        setColor('red');
    }

    // Función para manejar cuando se hacen dos clicks sobre el botón
    const manejarDosClick = () => {
        setColor('green');
    }

    return (
        <div className='contenedor'> 
            <button className="button" onClick={manejarUnClick} onDoubleClick={manejarDosClick}>
            Cambiar de color la caja
            </button>
            <div className="colorCaja" style={{ backgroundColor: color }} />
        </div>
    );
}

export default Botones;
