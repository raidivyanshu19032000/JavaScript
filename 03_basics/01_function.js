// Function 
function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
    
}

// sayMyName();


// function  addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function  addTwoNumbers(number1, number2){
    let result = number1 + number2;
    // console.log("Divyanshu");   
    return result;
}

const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a userName");
        return;
    }
    return `${userName} just logged in.` 
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1)
{
    return num1;
}
// console.log(calculateCartPrice(100,200,500,2000));

const user = {
    userName : "Divyanshu0", 
    price : 1200
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and Price is ${anyObject.prices}`);
    
}
// handleObject(user);
// we can also pass the direct object in function 
// handleObject({
//     userName : "Divyanshu", 
//     price : 1500
// });

const myNewArray = [200, 400, 600, 800]; 

function returnSecondValue(getArray){
    return getArray[1]; 
}
// console.log( returnSecondValue(myNewArray)); 
// console.log(returnSecondValue ([200, 400, 600, 800]));


// Point :
// function
// Paramater and argument (when we call function that time it is argument and when we define function that time it is called parameter)
// spread and rest operator (Overview )
// Pass object to a function 
//