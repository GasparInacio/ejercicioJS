// Función para verificar si un número es primo

function verificarNumero() {
    let numero = document.getElementById("entrada").value;
    let esPrimo = true;
    let salida = "";

    if (numero == 1) {
        salida = "1 no es un número primo";
    } else if (numero > 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            salida = `${numero} es primo.`;
        } else {
            salida = `${numero} no es primo.`;
        }
    } else {
        salida = `${numero} no es primo.`;
    }

    document.getElementById("textoSalida").innerHTML = salida;

}

function reset() {
    document.getElementById("textoSalida").innerHTML = "";
    document.getElementById("entrada").value = "";
}

// Función para realizar operaciones matemáticas en dos matrices dadas

function suma() {
    let numero1 = parseInt(document.getElementById("matriz1").value);
    let numero2 = parseInt(document.getElementById("matriz2").value);
    let resultado = (numero1 + numero2)

    document.getElementById("resultado").innerHTML = ("El resultado de la suma es " + resultado);
}

function resta() {
    let numero1 = parseInt(document.getElementById("matriz1").value);
    let numero2 = parseInt(document.getElementById("matriz2").value);
    let resultado = (numero1 - numero2)

    document.getElementById("resultado").innerHTML = ("El resultado de la resta es " + resultado);
}

function multiplicacion() {
    let numero1 = parseInt(document.getElementById("matriz1").value);
    let numero2 = parseInt(document.getElementById("matriz2").value);
    let resultado = (numero1 * numero2)

    document.getElementById("resultado").innerHTML = ("El resultado de la multiplicación es " + resultado);
}

function division() {
    let numero1 = parseInt(document.getElementById("matriz1").value);
    let numero2 = parseInt(document.getElementById("matriz2").value);
    let resultado = (numero1 / numero2)

    document.getElementById("resultado").innerHTML = ("El resultado de la división es " + resultado);
}

function reset1() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("matriz1").value = "";
    document.getElementById("matriz2").value = "";
}

// Suma de números en un rango

function sumarRango() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let calculo = 0;

    if (numero1 <= 0) {
        calculo = "El número que escribiste no es un número natural"
    }
    while (numero1 > 0) {
        calculo += numero1;
        numero1--;
    }

    document.getElementById("text1").innerHTML = calculo;

}

function reset2() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("numero1").value = "";
}

// Contar vocales de una cadena de texto

function contarVocales() {
    let cadena = document.getElementById("cadenaTexto").value;
    let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
    let numeroVocales = 0;

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            numeroVocales++
        }
    }

    document.getElementById("text2").innerHTML = `La cadena tiene ${numeroVocales} vocales.`

}

function reset3() {
    document.getElementById("text2").innerHTML = "";
    document.getElementById("cadenaTexto").value = "";
}

// Devuelve elementos únicos de un array

function mostrarUnicos() {
    let arr1 = [
        document.getElementById("array1").value,
        document.getElementById("array2").value,
        document.getElementById("array3").value,
        document.getElementById("array4").value
    ]
    let newArray = arr1.filter((item, index) => { return arr1.indexOf(item) === index; })

    document.getElementById("text3").innerHTML = newArray;

}

function reset4() {
    document.getElementById("text3").innerHTML = "";
    document.getElementById("array1").value = "";
    document.getElementById("array2").value = "";
    document.getElementById("array3").value = "";
    document.getElementById("array4").value = "";
}

// Revertir cadena sin usar reverse

function revertir() {
    let cadena = document.getElementById("text4").value;
    let nuevaCadena = "";

    for (let i = cadena.length -1; i >= 0; i--) {
        nuevaCadena += cadena[i];
    }

    document.getElementById("cadenaInvertida").innerHTML = nuevaCadena;
}

function reset5() {
    document.getElementById("text4").value = "";
    document.getElementById("cadenaInvertida").innerHTML = "";
}