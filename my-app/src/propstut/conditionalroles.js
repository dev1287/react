/* create an application with the following roles
admin: get full access
subadmin: get access to create or delete the courses
testprep: get access to create or delete the tests
user: consumes the content

*/

var user = 'admin';

switch(user) {
 case "admin":
    console.log("you will get full access");
  break;
// if we remove break it will print next console also; this is called "fall through".
 case "subadmin":
    console.log("you will get full access to courses");
    break;

case "testprep":
    console.log("you will get full access to test prep");
    break;

case "user":
    console.log("you will get full access to user courses");
    break;   
// if nothing of all above is true this will be printed.
default:
    console.log("trail user")
    break;

}