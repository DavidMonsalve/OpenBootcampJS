array = ['juan', 'maria', 'pedro', 'carlos',];

console.log(array);

newArray = array.map((valor, indice) =>{
    return `${indice+1}- ${valor}.`;
})

console.log(...newArray);