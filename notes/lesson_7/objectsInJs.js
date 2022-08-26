//working with objects

const obj = {
    id: 4,
    name: "Alex",
    last_name: "Jones",
    isDev: true,
    fav_books: ["x", "y", "z"],

    "4321_exampleOfVariableInsideObjectWithNumbersInItsName": [1, 2, 3, 4],
    '452': ["dog", "cat"] 
}

console.log(obj[452]);
console.log(obj.id);

const prop = "isDev";
console.log(obj[prop]);


//creating another object "obj" and changing the properties inside of it.
    //WRONG WAY.
obj2 = obj
obj2.name = "James"
console.log(obj2.name)
    //if we do this, we are also switching the name in "obj" to "James" because "obj2" is refering the same memory address as "obj".
console.log(obj.name)

    //RIGHT WAY TO DO IT.

obj.name = "Alex" //Im switching the name of the original "obj" back to Alex.
obj3 = { ...obj }
obj3.name = "Messi"
console.log("Obj:   ", obj)
console.log("Obj 2: ", obj2)
console.log("Obj 3: ", obj3)