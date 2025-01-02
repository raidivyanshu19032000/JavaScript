const accountId = 12233;
let accountEmail = "raidivyanshu19032000@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 112244; //Not allowed

accountEmail = "abc@gmail.com"
accountPassword = "79865"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);