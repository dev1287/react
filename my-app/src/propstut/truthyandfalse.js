/*below 5 all are falsy values
undefined
0
null
''
Nan

*/

// below does not print 
var user=null;
if(user){
    console.log("print in true");
}

// type coersion it will not check strictly, though 2 is string i will not check strictly light type coersion, where java script assumes and converts automatically

var user1 = "2";
if(2 == user1){
    console.log("print user1 in true");
}


// to strict type coersion we use ===

var user2 = "2";
if(2 === user2){
    console.log("print user2 in true");
}