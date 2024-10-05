let listaNums = [7, 2, 4, 6, 3, 9, 1, 11, 20];

//PUNTO 1
function findMax(listaNums) {
    let mayor = 0;
    for (let i = 0; i < listaNums.length; i++) {
        if (mayor < listaNums[i]) {
            mayor = listaNums[i];
        }
    }
    return mayor;
}
console.log(findMax(listaNums));

//PUNTO 2
function includes(listaNums, numBuscar) {
    for (let i = 0; i < listaNums.length; i++) {
        if (numBuscar == listaNums[i]) {
            return true;
        }
    }
    return false;
}
console.log(includes(listaNums, 4));

//PUNTO 3
function sum(listaNums) {
    let suma = 0;
    for (i = 0; i < listaNums.length; i++) {
        suma += listaNums[i];
    }
    return suma;
}
console.log(sum(listaNums));

//PUNTO 4
function missingNumbers(listaNums) {
    let temp, i, j, k, mayor, menor, l = 0, msnNum = [];

    for (i = 0; i < listaNums.length; i++) {
        for (j = 0; j < listaNums.length; j++) {
            if (listaNums[i] < listaNums[j]) {
                temp = listaNums[i];
                listaNums[i] = listaNums[j];
                listaNums[j] = temp;
            }
        }
    }

    menor = listaNums[0];
    mayor = listaNums[i - 1]
    k = menor + 1;

    for (let index = 0; index < listaNums.length; index++) {
        while (k < listaNums[index + 1]){
            msnNum[l] = k;
            l++;
            k++;
        }
        k = listaNums[index + 1] + 1;
    }
    return msnNum;
}
console.log(missingNumbers(listaNums));
