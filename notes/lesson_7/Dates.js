//working with Dates

date = new Date()
console.log(date)

//Months initialize at 0 (January == 0 // Decemeber == 11)
date2 = new Date(1987, 0, 20)
console.log(date2)

//We can also use mms to initialize dates
date3 = new Date(0)
console.log(date3)

date3 = new Date(100000000)
console.log(date3)

date3 = new Date(-100000000000)
console.log(date3)

date4 = new Date("October 13, 1972 12:15:15")
console.log(date4)

//Compare dates.
// What we can do with Date objects is compare if a date is bigger or smaller than another one using "<" ">".
console.log("------------date comparison--------------------")
console.log(date > date4)
console.log(date < date4)

//What about comparing equal dates?

date_1 = new Date(1987, 10, 20, 1, 23, 52, 192)
date_2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log("wrong method: ", date_1 === date_2) //this is WRONG.

//in order for us to compare dates that way, we must turn them into mms. (using .getTime())
console.log(date_1.getTime() === date_2.getTime())



//How to get the day, month, year from a Date.
console.log("---------Getting data from Dates.--------")

    //getting the day (.getDate())
console.log("Day: ", date_1.getDate())

    //getting the month
    //(Note for future me: January == 0 // December == 11).
console.log("Month: ", date_1.getMonth() + 1)

    //getting the year
console.log("Year: ", date_1.getFullYear())
console.log("Year: ", date_1.getYear())



//Showing Dates in strings (.toLocaleDateString() method)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log("--------------Dates in strings---------")

console.log(date_1)
console.log(date_1.toLocaleDateString("en-US"))
console.log(date_1.toLocaleDateString("en-GB"))