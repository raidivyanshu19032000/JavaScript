const user = {
    userName : "Divyanshu", 
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.userName}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.userName = "Nikhil"
// user.welcomeMessage();
// console.log(this)

// function chai(){
//     let userName = "Rai"
//     console.log(this.userName)
// }

// const  chai = function(){
//     let userName = "Rai"
//     console.log(this.userName)
// }


// const chai = ()=> {
//     let userName = "Rai"
//     console.log(this.userName)
// }
// chai();

//  Arrow function 
// const addTwo =(num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({username: "Divyanshu"})
// console.log(addTwo(4, 3));


// const myArray = [1,2,3,4,5]

// myArray.forEach(() => {})


    // Point that i learn in this session 
// global object of browser
// Arrow function 