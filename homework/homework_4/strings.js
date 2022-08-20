/*
Create a JS file containing the following lines

- A text string with your Name

- Another text string with your Surname

- A text string called "student" concatenating your Name and Surname with a space in between

- A text string called "studentMayus" that contains the string student but all in uppercase

- A text string called "studentMinus" that contains the string student but all lowercase

- A variable that contains the number of letters in the string "student" counting the spaces

- A variable that contains the first letter of the Name

- Another variable that contains the last letter of the Surname

- A text string that removes the spaces from the "student" variable

- A boolean variable that says if the Name is contained in the variable "student"
*/

const myName = "David";
const myLastName = "Monsalve";
const student = `${myName} ${myLastName}`;
const studentMayus = student.toUpperCase();
const studentMinus = student.toLocaleLowerCase();
const studentLength = student.length;
const studentFirstLetter = myName.charAt(0);
const studentLastLetter = myLastName.charAt(myLastName.length - 1);
const verifing = student.includes(myName)

console.log(myName);
console.log(myLastName);
console.log(student);
console.log(studentMayus);
console.log(studentMinus);
console.log(studentLength); 
console.log(studentFirstLetter);
console.log(studentLastLetter);
console.log("Does the student variable contains 'David'? ", verifing);