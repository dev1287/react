var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// one way of doing this
if (isLoggedIn){
console.log("Logged in Success");
if(isEmailVerified){
    console.log("Emal is verified");  
    if(cardInfo){
        console.log("you can make a purchase");    
    }
  }
}
console.log("-----------------------------------------------------------------------------");

// conditional way of doing above

if (isLoggedIn && isEmailVerified && cardInfo ){
    console.log("Allow user to take a purchase");
    
    } else {

        console.log("you cant make a purchase");   
    }


    console.log("-----------------------------------------------------------------------------");