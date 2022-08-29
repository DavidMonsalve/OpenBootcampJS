//Arrow Functions and Anonymous Functions.

//this way of doing this is ok, but we should use arrow functions instead.
const array = [1, 5, 3, 48, 54, 87]

const array2 = array.map(function(value){
    return value * 2
})
console.log(array2)


const array3 = array.map((valor) => valor*2) //this is an anonymous function because it does not have a name.
console.log(array3)



//arrow functions should always be declared before calling them, otherwise they dont work.
//It does not happens with regular functions nor variables.

//console.log(Double(5)) -- > ERROR
Double = value => value*2
console.log(Double(3))

const array4 = array.map(Double)
console.log(array4)