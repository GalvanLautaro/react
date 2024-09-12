import React, { useState } from 'react';
import './botones.css'

function Botones() {
    const [color, setColor] = useState('white');

    const manejarUnClick = () => {
        setColor('red');
    }

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
