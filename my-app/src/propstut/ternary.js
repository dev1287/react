//show user a signout button if logged in
// otherwise show login or signup

var authenticated = false;

if (authenticated){
    console.log("show logout")
} else {

    console.log("show login")
}

// most common another way to do it

authenticated ? console.log("show t logout") : console.log("show t login")