import React, { useState, useEffect } from 'react';
import './notas.css';

function Nota() {
  	// Definir el estado para almacenar la nota
  	const [nota, setNota] = useState('');
  	// Definir el estado para almacenar el tiempo de espera en milisegundos
  	const [tiempoEspera, setTiempoEspera] = useState(2000);
  	// Definir el estado para almacenar la última nota guardada
  	const [notaGuardada, setNotaGuardada] = useState('');

  	// Definir efecto secundario para guardar la nota automáticamente
  	useEffect(() => {
    	const cambiarNotaGuardada = () => {
        	setNotaGuardada(nota);
    	}
    	// Crear un temporizador que llama a la función de guardado después del tiempo de espera
    	const timeout = setTimeout(cambiarNotaGuardada, tiempoEspera);
    	// Definir función para limpieza del temporizador luego de que el componente se desmonta
    	return () => clearTimeout(timeout);
  	}, [nota, tiempoEspera]);

  	return (
    	<div className='contenedor'>
        	<h1>Bloc de notas</h1>
        	<textarea value={nota} onChange={(e) => setNota(e.target.value)} />
        	<p>Nota guardada: {notaGuardada}</p>
    	</div>
  	);
}

export default Nota;