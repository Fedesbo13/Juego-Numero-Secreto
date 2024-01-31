let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("intento "+intentos+"");

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste!! lo hiciste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }
    else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        if (intentos > maximoIntentos) {
            asignarTextoElemento('p', `Los siento, llegaste a la cantidad máxima de ${maximoIntentos} intentos!!`);
            document.getElementById('intentar').setAttribute('disabled', 'true');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('valorUsuario').setAttribute('disabled', 'true');
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles. Ekañy');
        }  else {  
                // si el numero generado esta incluido en la lista.
                if (listaNumerosSorteados.includes(numeroGenerado)) {
                    return generarNumeroSecreto();
                } else {
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
            }
    }

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intevalo de numeros
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('valorUsuario').removeAttribute('disabled');
}

condicionesIniciales();





