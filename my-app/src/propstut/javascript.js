// console.log("hello");
// console.log("hello228");




const account_id = 234556;
let account_email = "email@email.com";
var account_password = "2er33";
// in javascript a variable can be declared without var or let or const , but its not recommened to use though it works
account_city = "hyd";
// if we dont assign anything to variable it will be undefined, we can also remove semicolon in javascript it will work it up to u to give or not.
let account_state;

 // account_id = 1234; #changing const is not possible



console.log(account_id);

// let is changed
account_email = "email2-chaged-for-LET-@email.com";
console.log(account_email);

//var is changed
account_password = "password changes for var";
console.log(account_password);

// not declared any
account_city = "new hyderabad"

// get all variables in table staructure
console.table([account_id,account_email,account_password,account_city,account_state]);


/*
earlier javascript var does not have scopes if anybody uses same variables anywhere it used to changes any no of types it is declared even in scope , scope is nothing but {}.
prefer not to use "var" because of issue in block scope and functional scope.
*/

// so we must use "LET" .


let full_name = "raghavendra";
let age = "18"

// below is called interpolation or template literals.( we use back ticks `` for this)
console.log (`FullName is ${full_name} 
age is ${age}`)





