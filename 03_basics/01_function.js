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

console.log(loginUserMessage());





// Point :
// function
// Paramater and argument (when we call function that time it is argument and when we define function that time it is called parameter)