//Asynchronous Functions and Promises.

function myAsyn(){
    //Makes a call to an external database
    //Can return an error.
}

const myPromise = new Promise((resolve, reject) => {
    //If everything is correct
    if (true){
        resolve()
    } else {
        reject()
    }
})

myPromise
    .then(() => console.log("Executed correctly."))
    .catch(() => console.log("ERROR."))
    .finally(() => console.log("I always execute."))