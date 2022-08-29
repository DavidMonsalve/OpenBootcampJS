// What is a function, how to declare and use them.


function sayHi(parameter_1, parameter_2, parameter_3){
    console.log("hi", parameter_1, parameter_2, "and", parameter_3)
    console.log(`Hi ${parameter_1}`)
}

sayHi("Jonah", "Madison", "Charlotte")

//


let name = "Arabella"
console.log(name)

function goodBye(name){
    name = "Nick"
    console.log(`Bye, ${name}`)
}

goodBye(name)
console.log(name)


//

let person = { name: "juan", lastname: "Gonzalez" }
console.log(person.lastname)

function greetPerson(object){
    object.lastname = "Perez" //this would actually change the original object
    console.log(`Good afternoon, ${object.name} ${object.lastname}`)
}

greetPerson(person)
console.log(person.lastname)


////////



function showNumber(number = 7){  //Parámetros por defecto
    console.log(number)
}

showNumber()


///////////


function show(...parametros){
    console.log(parametros)
}

show(1, 2, 3, "hola", {dog: "bulldog"})




///////////


function addition(...nums){
    return nums.reduce((a, b) => a + b)
}

const a = addition(1, 2, 3)
console.log(a)

//////////


function multiply(a = 0, b = 0){
    return a*b
}

console.log(multiply(4, 9))