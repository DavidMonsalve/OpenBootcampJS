//sorting lists -> MODIFIES THE ARRAY

const array = [2, 5, 9, 15, 1, 2, 0, 4];
const arrayL = ["a", "j", "g", "b"];

console.log(array);



array.sort((a, b) => {  //a = previous element, b = next element.
    /*
        If .sort() returns a value < 0 (-1, -2, -3...) it means b > a, which will sort the list backwards.
        If .sort() returns 0 a === b.
        If it returns > 0 (1, 2. 3...), it means a > b. in this case, there will be no changes in the array.
    */

        //this code will sort the array from ths smalleest to biggest number (works with letters too)

    if (a < b){
        return -1
    }
    else if (a > b){
        return 1
    }
    else { // a === b
        return 0
    }
})
console.log(array);


//sorting only numerical arrays (ascending)

const numericalArray = [4, 7, 2 , 5, 10, 16, 3];

numericalArray.sort((a, b) => a - b);
console.log(numericalArray)


//sorting only numerical arrays (descending)

numericalArray.sort((a, b) => b - a);
console.log(numericalArray)

//sorting arrays of objects

objectList = [
    { nombre: "Leire", edad: 35},
    { nombre: "David", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Juan", edad: 3},
    { nombre: "Marta", edad: 29},
  ]

//we can do this:

/*
 objectList.sort((a, b) => { 
    if (a.edad < b.edad){
        return -1;
    }
    else if(a.edad > b.edad){
        return 1;
    }
    else{
        return 0;
    }
}) 
console.log(objectList);
*/

//but we can also do this instead:

objectList.sort((a, b) => a.edad - b.edad)
console.log(objectList)