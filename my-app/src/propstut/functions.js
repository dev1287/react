function sayhello(name){
console.log("hello there static");
console.log("hello there", name);
//below is the best way to use it latest
console.log(`hello there", ${name}`);
}
console.log("-----------------------------------------------------------------------------");
sayhello();
sayhello("raghu");
sayhello("dep");

console.log("-----------------------------------------------------------------------------");
// return and console logging are two different things
function namstey() {
return "hello in india";
}
var greetings = namstey();
console.log(greetings);
// instead of using the variable we can use function in console log also
console.log(namstey());
console.log("-----------------------------------------------------------------------------");