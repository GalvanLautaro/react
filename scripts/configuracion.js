import { letrasUsadas, contenedorPalabra, botonInicio } from './logicaJuego';
import { eventoLetra, palabraElegida, aciertos, errores, letrasUsadas2, actualizarContadorVidas } from './logicaJuego';

// Función para mostrar la palabra que hay que adivinar
export function mostrarPalabra() {
    palabraElegida.forEach(letra => {
        const elementoLetra = document.createElement('span');
        elementoLetra.innerHTML = letra.toUpperCase();
        elementoLetra.classList.add('letra');
        elementoLetra.classList.add('hidden');
        contenedorPalabra.appendChild(elementoLetra);
    });
}

// Función para elegir una palabra aleatoria de la API
export async function elegirPalabraAleatoria() {
    try {
        const response = await fetch('https://clientes.api.greenborn.com.ar/public-random-word');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        palabraElegida = data[0].toUpperCase().split('');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para iniciar el juego
export async function iniciarJuego() {
    letrasUsadas2 = [];
    aciertos = 0;
    errores = 0;
    contenedorPalabra.innerHTML = '';
    letrasUsadas.innerHTML = '';
    botonInicio.style.display = 'none';
    await elegirPalabraAleatoria();
    mostrarPalabra();
    document.addEventListener('keydown', eventoLetra);
}
