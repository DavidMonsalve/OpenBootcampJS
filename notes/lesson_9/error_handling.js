const myFunction = val => {
    if (typeof val === "number"){
        return 2*val
    }

    throw new Error("value must be a number")
}

/* 
const Double = myFunction("a1")
console.log(Double) 
*/

try {
    console.log("Esta ejecutandose de manera correcta")
    const Double = myFunction(1)
    console.log(Double)
    const Double_1 = myFunction("a1")
    console.log(Double_1)
} catch (e) {
    console.error("ERROR!")    
} finally{
    console.log("This block of code will execute no matter what.")
}

