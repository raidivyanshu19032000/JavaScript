//Singelton 
// Object.create

// Object literals 

const mySym = Symbol("key1");

const jsUser = {
    name: "Divyanshu", 
    "full name" : "Divyanshu Rai",
    [mySym] : "mykey1",
    age : 25, 
    location : "Noida", 
    email : "rai@google.com", 
    isLoggedIn : false, 
    lastLoginDay : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "divyanshu@chatgpt.com"
// Object.freeze(jsUser) // This method will appied for all object
jsUser.email = "divyanshu@microsoft.com"
// console.log(jsUser);


// this object method will prevent to freez single key in object in js.
// Object.defineProperty(jsUser, 'name', {
//     writable: false,  // Disables modification of the 'name' property
//     configurable: false,  // Prevents 'name' property from being redefined or deleted
//   });

jsUser.name = "Divyanshu Rai.";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js user");   
}

jsUser.greetingTwo = function (){
    console.log(`Hello js user , ${this.name}`);
}

 console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

