import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ListaTareas({ tareas }) {
  const [modalTarea, setModalTarea] = useState(null);

  const handleModal = (tarea) => {
    setModalTarea(tarea);
  };

  return (
    <ul className="tarea-lista">
      {tareas.map(tarea => (
        <li key={tarea.id} className="tarea" onClick={() => handleModal(tarea)}>
          <Link to={`/detalle/${tarea.id}`}>
            {tarea.titulo}
          </Link>
        </li>
      ))}
      {}
    </ul>
  );
}

export default ListaTareas;