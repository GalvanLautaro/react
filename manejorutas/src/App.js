import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import data from './data'; 
import ListaTareas from './listaTareas.js';
import CrearTarea from './crearTarea.js';
import DetalleTarea from './detalleTarea.js';

function App() {
  const [tareas, setTareas] = useState(data);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <BrowserRouter>
      <nav className='link-container'>
        <Link to="/" className='link-estilo'>Lista de Tareas</Link>
        <Link to="/crear" className='link-estilo'>Crear Tarea</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListaTareas tareas={tareas} />} />
        <Route path="/detalle/:id" element={<DetalleTarea tareas={tareas} />} />
        <Route path="/crear" element={<CrearTarea agregarTarea={agregarTarea} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;