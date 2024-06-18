// 2+2 is an operation, mltiplication of 2 numbers is an operation. math operations
let value = 2
let negativevalue = -value
console.log(negativevalue)

// string conatination
let str1 = "ravella"
let str2 = "raghavendra"
let str3 = str1 + str2
console.log(str3);

// if first is string then evrtything will be string, the moment the string starts it will start consider that on wards as string.
console.log(1 + "2");
console.log("1" + 2);
console.log(1+1+"99") //it will add from left to right
console.log(1+"1"+99)
console.log("1"+1+99) //1199 it will not at numbers at last
console.log(1+1+"1"+2+99)


console.log("-----------------------------------------------------------------------------");


// use paranthathes () to proper operations
console.log((3+4)*5 % 3);

console.log(+true)
console.log(+"")


console.log("-----------------------------------------------------------------------------");

let gameCounter = 100;
++gameCounter
console.log(gameCounter)
gameCounter++
console.log(gameCounter)
console.log("-----------------------------------------------------------------------------");


// after assigning the value of x to y the x value is evaluated
let x = 2
let y = x++
console.log(x + y);
console.log(x);
console.log(y);

// here first the value of a is increase to 3 and then increase is assigned to b
console.log("-----------------------------------------------------------------------------");
let a = 2
let b = ++a
console.log(a + b);
console.log(a);
console.log(b);
console.log("-----------------------------------------------------------------------------");
// to find sicount percertage
var listing_Price = 100;
selling_Price = 31.99;
// use parathases for better readability
let calculate_Discount = ((listing_Price - selling_Price)/listing_Price) * 100
console.log(`The Discount is ${calculate_Discount}% buy now`);

// boolean

var result = (selling_Price < listing_Price);
console.log(result) //true
console.log(typeof result) //boolean