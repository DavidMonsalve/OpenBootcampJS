var myHeightInCm = 183;
var myHeightInM = 1.83;
var myWeightInKg = 56.50;
var roundedHeightM = Math.ceil(myHeightInM);
var roundedWeightKG = Math.floor(myWeightInKg);

var max = Number.MAX_VALUE;
var aux = max + 1;

var isItTrue = (max === aux);

console.log(`my height in cm: ${myHeightInCm}`)
console.log(`my height in M: ${myHeightInM}`)
console.log(`my weight in KG: ${myWeightInKg}`)


console.log(`height in meters rounded up: ${roundedHeightM}`);
console.log(`weight in KG rounded down: ${roundedWeightKG}`);
console.log(`maximum value in JS ${max}`);
console.log(`maximum value in JS +1 (or at least trying to add 1 to the max value): ${aux}`);
console.log(isItTrue);