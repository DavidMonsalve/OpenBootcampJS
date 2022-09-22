const myFunction = data => {
    if (typeof data === "number") {
        return data * 2
    }
    throw new Error("Value must be a number")
}

try {
    const duplicateValue = myFunction(10)
    console.log(duplicateValue)
} catch (e) {
    console.error("Error...")
}