import React, { useState, useEffect } from 'react';
import './notas.css';

function Nota() {
  const [nota, setNota] = useState('');
  const [tiempoEspera, setTiempoEspera] = useState(2000);
  const [notaGuardada, setNotaGuardada] = useState('');

  useEffect(() => {
    const cambiarNotaGuardada = () => {
        setNotaGuardada(nota);
    }
    const timeout = setTimeout(cambiarNotaGuardada, tiempoEspera);

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