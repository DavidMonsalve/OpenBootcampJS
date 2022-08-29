//- A function without parameters that always returns "true"

function alwaysTrue(){
    console.log(true)
}
alwaysTrue()

//- An asynchronous function that uses a setTimeout and sends a "Hello, I'm a promise" to the console 5 seconds after being executed


const myPromise = new Promise((resolve, reject) => {
    //If everything is correct
    if (true){
        resolve()
    } else {
        reject()
    }
})

setTimeout(() => {
    myPromise
    .then(() => console.log("Hola, soy una promesa"))
    .catch(() => console.log("ERROR."))
    .finally(() => console.log("I always execute."))

}, 5000)


//- An automatic even index generator function

function* generator(){
    let id = 0
    while(true){
        id += 2
        if (id == 20){
            return id
        }
    yield id
    }
}
gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
