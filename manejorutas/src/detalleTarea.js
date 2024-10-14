import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleTarea({ tareas }) {
  const { id } = useParams();
  const tarea = tareas.find(t => t.id === parseInt(id));

  if (!tarea) {
    return <div>Tarea no encontrada</div>;
  }

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
      <p>Fecha de creación: {tarea.fechaCreacion.toLocaleDateString()}</p>
      <p>Estado: {tarea.completada ? 'Completada' : 'Incompleta'}</p>
    </div>
  );
}

export default DetalleTarea;