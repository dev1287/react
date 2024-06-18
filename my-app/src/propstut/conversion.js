// this will be nan (not a number).
let score = "33abc"
console.log(typeof score)
console.log(typeof (score))
let valueInNumber = Number(score);
console.log(typeof (valueInNumber))
console.log(valueInNumber)    // this will ne nan as we are converting not a number.

// below we are converting null the output will be zero
let score1 = null
console.log(typeof (score1))
let valueInNumber1 = Number(score1);
console.log(typeof (valueInNumber1))
console.log(valueInNumber1)  

// string will be converted to number
let score2 = "33"
console.log(typeof (score1))
let valueInNumber2 = Number(score2);
console.log(typeof (valueInNumber2))
console.log(valueInNumber2) 

// below are converting to numbers
// "33" => 33
// True => 1, false =>0
// "33aa" => Nan


// conversting to boolean
let booleannumber = 1;
let booleancovert = Boolean(booleannumber)
console.log(typeof (booleancovert))
console.log(booleancovert)

// 0 => true;
// 0 => false;
// raghu => true;
// "" => false


//number to string
let somenumber = 33
let stringcovert = String(somenumber)
console.log(typeof(stringcovert))
console.log(stringcovert)

