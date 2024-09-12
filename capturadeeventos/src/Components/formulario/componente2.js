import React, { useState } from 'react';
import './formulario.css';

function Formulario() {
		// Controlar estado del formulario
  	const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    contraseña: '',
  	});
  	const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    contraseña: '',
  	});

  	// Manejar los cambios que haya en los distintos campos del formulario
  	const manejarCambio = (evento) => {
    	const { name, value } = evento.target;
    	setDatosFormulario({ ...datosFormulario, [name]: value });

    	const nuevosErrores = { ...errores };
    	if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      		nuevosErrores.email = 'Ingrese un correo electrónico válido';
    	} else {
      		nuevosErrores.email = '';
    	}
    	if (name === 'contraseña' && value.length < 6) {
      		nuevosErrores.contraseña = 'La contraseña debe tener al menos 6 caracteres';
    	} else {
      		nuevosErrores.contraseña = '';
    	}
    	setErrores(nuevosErrores);
  	};

  	// Renderizar el formulario
  	return (
    	<form>
      		<div>
        		<label>Nombre:</label>
        		<input
          		type="text"
          		id="nombre"
          		name="nombre"
          		value={datosFormulario.nombre}
          		onChange={manejarCambio}
        		/>
        		{errores.nombre && <p>{errores.nombre}</p>}
      		</div>
      		<div>
        		<label>Correo Electrónico:</label>
        		<input
          		type="email"
          		id="email"
          		name="email"
          		value={datosFormulario.email}
          		onChange={manejarCambio}   
        		/>
        		{errores.email && <p>{errores.email}</p>}
      		</div>
      		<div>
        		<label>Contraseña:</label>
        		<input
          		type="password"
          		id="contraseña"
          		name="contraseña"
          		value={datosFormulario.contraseña}
          		onChange={manejarCambio}
        		/>
        		{errores.contraseña && <p>{errores.contraseña}</p>}
      		</div>
      		<button type="submit">Enviar</button>
    	</form>
  	);
}

export default Formulario;