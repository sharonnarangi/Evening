function checkPassword(){
    console.log("Checking password;")
    console.log("Done!!!")
}

function createSess(){
    console.log("Create Session!!!");

}
//auth.js is now a module by exposing these two functions to other files.

module.exports={ checkPassword}, createSess;