function getuserrole(name, role){
    switch(role) {
        case "admin":
           console.log("you will get full access");
           return `${name} is the admin with full acess`
         break;
       // if we remove break it will print next console also; this is called "fall through".
        case "subadmin":
           return `${name} is the subadmin with full acess to courses`
           break;
       
       case "testprep":
           return `${name} is the testprep with full acess to test prep`
           break;
       
       case "user":
           return `${name} is the user with full acess to view courses`
           break;   
       // if nothing of all above is true this will be printed.
       default:
        return `${name} is the unknown with limited acess`
           break;
       
       }

}


getuserrole("raghu","testprep")
console.log(getuserrole("raghu","testprep"));

var knowuser = getuserrole("dep","user")
console.log(knowuser);
console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------");
// we can also assign function to a varaible

let getuserdetails = function(name, role){
    switch(role) {
        case "admin":
           return `${name} is the admin with full acess`
         break;
       // if we remove break it will print next console also; this is called "fall through".
        case "subadmin":
           return `${name} is the subadmin with full acess to courses`
           break;
       
       case "testprep":
           return `${name} is the testprep with full acess to test prep`
           break;
       
       case "user":
           return `${name} is the user with full acess to view courses`
           break;   
       // if nothing of all above is true this will be printed.
       default:
        return `${name} is the unknown with limited acess`
           break;
       
       }

}


getuserdetails("raghu2","admin")
console.log(getuserdetails("raghu3","subdmin"));

var knowuser = getuserdetails("dep2","useemr")
console.log(knowuser);

console.log("-----------------------------------------arrow functions------------------------------------");
console.log("-----------------------------------------------------------------------------");

let getuserdetails2 = (name, role) => {
    switch(role) {
        case "admin":
           return `${name} is the admin with full acess`
         break;
       // if we remove break it will print next console also; this is called "fall through".
        case "subadmin":
           return `${name} is the subadmin with full acess to courses`
           break;
       
       case "testprep":
           return `${name} is the testprep with full acess to test prep`
           break;
       
       case "user":
           return `${name} is the user with full acess to view courses`
           break;   
       // if nothing of all above is true this will be printed.
       default:
        return `${name} is the unknown with limited acess`
           break;
       
       }

}


getuserdetails2("raghu5","admin")
console.log(getuserdetails2("raghu6","subdmin"));

var knowuser = getuserdetails2("dep7","useemr")
console.log(knowuser);