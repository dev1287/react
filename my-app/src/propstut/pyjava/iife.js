//Immediately Invoked Function Expressions(IIFE) 
// to invoke it immediately we use, suppose we have a database connection to make it immediately we use it
//suppose we mainly use to avoid global scope pollution where variables global are called in function to avoid it we use iife for executing immediately
//() first paranthesis is function and second parantheis is to execute function()
//we have to keep ; semicolon at the end calling() of iife otherwise it will not know when to end or it gives error
(function chai(){
    // named IIFE as we have given name chai
    console.log(`DB CONNECTED`);
})();


//using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')