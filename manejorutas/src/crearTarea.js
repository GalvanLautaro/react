import React, { useState } from 'react';
import './App.css';

function CrearTarea({ agregarTarea }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [completada, setCompletada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();   

    const nuevaTarea = { 
        id: Date.now(),
        titulo,
        descripcion,
        completada: false,
        fechaCreacion: new Date() 
    };
    
    agregarTarea(nuevaTarea);
    setTitulo('');
    setDescripcion('');
    setCompletada(false);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-tarea">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="input-tarea"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <label className='marcar-tarea'>
        <input
          type="checkbox"
          checked={completada}
          onChange={(e) => setCompletada(e.target.checked)}
        />
        Marcar como completada
      </label>
      <button type="submit" className="boton-crear">Crear Tarea</button>
    </form>
  );
}

export default CrearTarea;