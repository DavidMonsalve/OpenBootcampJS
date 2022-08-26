const personal_info = {
    Name: "David",
    LastName: "Monsalve",
    Age: 19,
    Height: 1.83,
    eresDesarrollador: true,
}

var myAge = "Age"
console.log(personal_info[myAge])
console.log(personal_info)

bestFriend1 = {...personal_info}
bestFriend1.Name = "x"
bestFriend1.LastName = "xxx"
bestFriend1.Age = 18
bestFriend1.Height = 1.80
bestFriend1.eresDesarrollador = false
console.log(bestFriend1)

bestFriend2 = {...personal_info}
bestFriend2.Name = "y"
bestFriend2.LastName = "yyy"
bestFriend2.Age = 19
bestFriend2.Height = 1.75
bestFriend2.eresDesarrollador = false
console.log(bestFriend2)


list = [personal_info, bestFriend1, bestFriend2]
console.log(list)

descendingSortedList = list
console.log(descendingSortedList)

descendingSortedList.sort((a, b) => b.Age - a.Age)
console.log(descendingSortedList)