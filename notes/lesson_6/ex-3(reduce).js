const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, current, i, arrayOriginal) => {
    console.log(acumulado);
    return acumulado + current;
})

console.log(suma);