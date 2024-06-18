say2jello();

function say2jello(){
    console.log("this is true")
}



//above works becaise of global context it is called window in browsers and diffrent in engines like node

// window object is directly ties with browsers

/* context 

Execution context
variable object ---scope chain ---this

function declarations are scanned and made available
variable declarations are scanned and made undefined


*/