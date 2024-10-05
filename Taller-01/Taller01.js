//Punto 1
function convertidorTemp(c) {
    return (c * 9 / 5) + 32;
}
console.log("La temperatura en Grados Celsius es: " + convertidorTemp(20));

//Punto 2
function resolvedor(a, b, c, positivo) {
    const raiz = Math.sqrt(b * b - 4 * a * c);
    const denominador = 2 * a;

    if (positivo) {
        return (-b + raiz) / denominador;
    } else {
        return (-b - raiz) / denominador;
    }
}
console.log(resolvedor(1, 5, 4, true));

//Punto 3
function mejorParidad(x) {
    if (x % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(mejorParidad(10));

//Punto 4
function peorParidad(x) {
    if (x == 0){
        par = 0; //Según Wikipedia si es par
    }
    if (x % 2 == 0){
        par = 2;
    }
    else {
        par = 1;
    }

    return (par == 2 || par == 0);
}
console.log(peorParidad(10));
console.log();
console.log(peorParidad(5));
console.log();
console.log(peorParidad(0));
