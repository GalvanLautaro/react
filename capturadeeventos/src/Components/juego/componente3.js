import React, { useState } from 'react';
import './juego.css'

function AdivinaNumero() {
  	// Inicializar el estado del juego
  	const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
  	const [gano, setGano] = useState(false);
  	const [suposicion, setSuposicion] = useState('');
  	const [mensaje, setMensaje] = useState('');

	// Función para manejar el evento de adivinar
  	const manejarAdivinar = () => {
		// Comparar la suposición con el número aleatorio
    	if (suposicion == numeroAleatorio) {
      	setGano(true);
      	setMensaje('¡Felicidades! Adivinaste el número');
    	} else if (suposicion < numeroAleatorio) {
      	setMensaje('El número es más alto.');
    	} else {
      	setMensaje('El número es más bajo.');
    	}
  	};

	// Función para reiniciar el juego
  	const reiniciarJuego = () => {
    	setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
    	setGano(false);
    	setSuposicion('');
    	setMensaje('');
  	};

  	return (
        <div>
            <h1>Adivina el número</h1>
            <p>Adivina un número entre 1 y 100</p>
        <input
            type="number"
            value={suposicion}
            onChange={(e) => setSuposicion(e.target.value)}
        />
        <button onClick={manejarAdivinar}>Adivinar</button>
        {mensaje && <p>{mensaje}</p>}
        {gano && <button onClick={reiniciarJuego}>Jugar de nuevo</button>}
        </div>
    );
}

export default AdivinaNumero;