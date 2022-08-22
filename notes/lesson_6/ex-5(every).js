//how to compare lists

const array = [4, 5, 8, 6, 3, 2, -8, -10];

/* 
const result = array.every(valor => {
    if (typeof valor > 0) {
        return true;
    }
    else {
        return false;
    }
}) 
*/

const result = array.every(valor => valor > 0)

console.log(result);

//(this note isnt complete, I havent write yet how to actually compare the lists.)