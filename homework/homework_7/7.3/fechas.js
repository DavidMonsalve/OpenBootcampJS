Today = new Date()
console.log(Today)

myBirth = new Date(2002, 09, 15)
console.log(myBirth)

verifing = Today > myBirth

console.log(verifing)

myBirthDAY = myBirth.getDate()
console.log(myBirthDAY)

myBirthMonth = myBirth.getMonth() + 1
console.log(myBirthMonth)

myBirthYear = myBirth.getFullYear()
console.log(myBirthYear)