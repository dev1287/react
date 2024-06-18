//Allow user to access the course if he has
//logged in in email
//logged in in google
//logged in in facebook

var email = false;
var google = false;
var facebook = true;

if (email || google || facebook) {

    console.log("you can access a course")
} else {

    console.log("you cant access a course")
}
console.log("-----------------------------------------------------------------------------");
// other way to do it

if(email){
    console.log("email login sucess")
}
if(google){
    console.log("google login sucess")
}
else {
   
        console.log("facebook login sucess")
}

