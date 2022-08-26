const array = [1, 2, 3, 4, 5, 1]

const mySet = new Set(array)

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
/* 
mySet.clear()
console.log(mySet)
 */


