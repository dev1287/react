/* below we have to write return in in curly braces       it comes as undeined without return                    
this is called explicit return we are giving return */
/* const addTwo = (num1, num2) => {
     num1 + num2
 } */

/* No need to write return for below but use paranthases istead of flower brackets or curly braces - useful in react
This is called implecent return */
/*
const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3,3))
*/

/* same to return object using arrow we do below, we cant return without paranthasis */
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo())

// some time we write arrows in many types like below with paranthesis and braces
// myArray.forEach(()=>())
// myArray.forEach(()=>{})


// 2) IIFE?
// 3) Javascript Execution context
/* A)(1) {} -> Global Execution Context <---this
all global execution context are allocated in "this"  , it is must
browser execution context and node execution context are different
in browsers global execution, this value comes in window object
(2) functional execution context
(3) Eval Execution context (this has property inside it)


{}  --> (1a)this is called memory creation phase (or) creation phase (in memory creation phase what ever variable  declared by us they are allocated memory)  )
var1 -> undefined, var2 ->undefined, addnum-->defnition(all variable of this finction goes to this defnition), result1-->undefined, result2-->undefined

(1b)Execution phase
val1 <-- 10
val2 <--20

addnum---> for every function it will create an seperate execution context , this is context will have (new variable enviroment + execution thread) this new execution will be deleted after it job complete automatically
again in this sandbox of execution context again memory phase and execution phase will happen
in memoryphase: va1 ->undefined, val2 -> undefined, total-->undefined
in execution: num1->10, num2->5, total = 15 (this total will return to global execution context {})

again in result2 new execution context will be there
in memoryhase: va1 ->undefined, val2 -> undefined, total-->undefined
execution phase: num1->10, num2->2, total = 12

suppose javascript uses LIFO call stack(last in first out stack)- suppose we use one function inside another function like we call fuction one and call fuction 2 inside fuction1, function two has to be cleared  and later function one.


*/

//26
// there will be scope problem with var, even if we declare var inside function it can be utilized outside function also
//falsy values = false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values = "0", 'false', " ", [], {}, function(){}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
