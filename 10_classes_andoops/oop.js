// object literals 
const user = {
    userName: "Divyanshu", 
    loginCount : 10, 
    isBlocked : false ,

    getUserDetails : function() {
        // console.log("Got user details from database")
        console.log(`UserName :  ${this.userName}`)
    }
}
// console.log(user['userName']); 
// console.log(user.getUserDetails())
// console.log(this)

function User (userName, loginCount, isBlocked){
    this.userNameuserName = userName, 
    this.loginCount = loginCount, 
    this.isBlocked = isBlocked

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`)
    }

    return this;
}


// Constructor Function  => new 
const userOne = new User("divyanhsu", 25, true)
const userTwo = new User("chaiAurCode", 20, false)
console.log(userOne.constructor);
console.log(userTwo);

// 1. when we use new object  empty object will create which is known as instance. 
// 2. Constructor function will call because of new keyword.