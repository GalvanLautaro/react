import { iniciarJuego } from './configuracion';

// Obtener referencias a los elementos del DOM
export const letrasUsadas = document.getElementById("letrasUsadas");
export const contenedorPalabra = document.getElementById("contenedorPalabra");
export const botonInicio = document.getElementById("botonInicio");
export const contadorVidas = document.getElementById("contadorVidas");

// Definir número total de vidas
export const totalVidas = 6;

export let errores; // Contador de errores
export let aciertos; // Contador de aciertos
export let letrasUsadas2; // Letras que ya se usaron
export let palabraElegida; // La palabra que se debe adivinar

// Función para actualizar el contador de vidas
export function actualizarContadorVidas(errores) {
    contadorVidas.innerHTML = `Vidas restantes: ${totalVidas - errores}`;
}

// Función para agregar una letra a la lista de letras usadas
export function agregarLetra(letra) {
    const elementoLetra = document.createElement('span');
    elementoLetra.innerHTML = letra.toUpperCase();
    letrasUsadas.appendChild(elementoLetra);
}

// Función para letra incorrecta
export function letraIncorrecta(letra) {
    errores++;
    if (errores === totalVidas) {
        finalizarJuego();
    }
    actualizarContadorVidas(errores)
}

// Función para finalizar el juego
export function finalizarJuego() {
    document.removeEventListener('keydown', eventoLetra)
    botonInicio.style.display = 'block'
}

// Función para letra correcta
export function letraCorrecta(letra) {
    const { children } = contenedorPalabra;
    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML === letra) {
            children[i].classList.toggle('hidden');
            aciertos++;
        }
    }

    if (aciertos === palabraElegida.length) {
        finalizarJuego();
    }
}

// Función para procesar la entrada de letras
export function entradaLetras(letra) {
    if (palabraElegida.includes(letra)) {
        letraCorrecta(letra);
    } else {
        letraIncorrecta(letra);
    }
    agregarLetra(letra);
    letrasUsadas2.push(letra)
}

// Función para operar con el evento de presionar una tecla
export function eventoLetra(event) {
    let nuevaLetra = event.key.toUpperCase();
    if (nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas2.includes(nuevaLetra)) {
        entradaLetras(nuevaLetra);
    }
}