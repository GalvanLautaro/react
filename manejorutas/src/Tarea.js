import React from 'react';

function Tarea({ tarea }) {
  return (
    <div>
      <input type="checkbox" checked={tarea.completada} />
      <span>{tarea.titulo}</span> - {tarea.descripcion}
    </div>
  );
}

export default Tarea;