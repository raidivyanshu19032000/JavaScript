// const tinder = new Object(); singleton object 

const tinderUser = {}; 
tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "Some@gmail.com", 
    fullName : {
        userFullName : {
            firstName : "Divyanshu", 
            lastName : "Rai"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "f", 6: "e"}


// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1, 
        email: "d@gmail.com"
    }, 
    {
        id: 2, 
        email: "d@gmail.com"
    }, 
    {
        id: 3, 
        email: "d@gmail.com"
    }, 
    {
        id: 4, 
        email: "d@gmail.com"
    }
]


users[1].email; 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));




