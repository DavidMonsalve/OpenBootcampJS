const array = [1, 2, 3, 4, 5, 1]

var mySet = new Set(array)

console.log(array)
console.log(mySet)

// add
mySet.add("Hi")
mySet.add("David")
mySet.add("Buenos Aires")
console.log(mySet)

//delete
mySet.delete("Buenos Aires")
console.log(mySet)

//clear
mySet.clear()
console.log(mySet)

mySet.add(1)
mySet.add(2)
mySet.add(3)
console.log(mySet)

//has
console.log(array.includes(3))
console.log(mySet.has(3))

//size (size is a property not a method)
console.log(mySet.size)

//iteration (using ForEach)
mySet.forEach(valor => {
    console.log(valor)
})


//getting values from the set
    //i could use an iterator object, like this:
const it_myset = mySet.values()
console.log(it_myset)

    //i can also turn this set into an array:
const ar_myset = [...mySet]
console.log(ar_myset)