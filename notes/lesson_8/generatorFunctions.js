// generator functions

function* gerenateID(){
    let id = 0
    while(true){
        id++
        if (id === 10){
            return id
        }
        yield id //waiting for another call
    }
}

const gen = gerenateID()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)