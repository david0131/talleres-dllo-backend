//Punto 1
function desglosarString(texto, tipo){
    vocales = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ"
    consonantes = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ"

    if (tipo == "vocales") {
        return texto.split('').filter(letra => vocales.includes(letra)).length;
    } else if (tipo == "consonantes") {
        return texto.split('').filter(letra => consonantes.includes(letra)).length;
    } else {
       return 0;
    }
}
texto = "murcielagos"
console.log(desglosarString(texto, "vocales"))
console.log(desglosarString(texto, "consonantes"))

//Punto 2
console.log("---------------------------------------");
function twoSum(numbers, target) {
    return numbers.reduce((acumulado, actual, indexActual) => {
        if (acumulado.length > 0) {
            return acumulado;
        }

        const complementoIndex = numbers.indexOf(target - actual);
        if (complementoIndex != -1 && complementoIndex != indexActual) {
            return [indexActual, complementoIndex];
        }

        return acumulado;
    }, []);
}
const numbers = [4, 5, 2, 1, 7];
const target = 8;
console.log(twoSum(numbers, target));

//Punto 3
console.log("---------------------------------------");
function conversionRomana(numeroRomano) {
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    return numeroRomano.split('').reduce((acumulado, actual, i, arr) => {
        const valorActual = valoresRomanos[actual];
        const valorSiguiente = valoresRomanos[arr[i + 1]];

        if (valorSiguiente && valorActual < valorSiguiente) {
            return acumulado - valorActual;
        } else {
            return acumulado + valorActual;
        }
    }, 0);
}
const numeroRomano = "MCMXIV";
console.log(conversionRomana(numeroRomano));