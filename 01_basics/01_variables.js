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



/* Point need to remember: 
    Var : 
        Variables declared with var can redeclared and reassigned without any issue.
        Variables declared with var have a global scope if declared outside the function.
        Variables declared with var have a functional scope if declared inside the function.

    Let : 
        Before ES5 (2015), variables used to be declared with the var keyword. Of course, the var keyword gives us the flexibility of redclaring and re-assigning the previous variables, but it comes with problems too if a variable is declared in some file, can be changed in the second file mistakenly which will lead to bugs. To avoid this, we should always declare the variables with let and const keywords. Let’s look at the let in this section.
        -Variables declared with let cannot be redeclared but reassigned without any issue.
        -Variables declared with let have a block scope if declared inside a block.
        -Variables declared with let have a functional scope if declared inside a function.
        -Variables declared with let have a global scope for the same file not all, if declared outside a function and a block.
        -The major difference between var variables and let variables is that let variables have BLOCK SCOPE. If declared inside a block, then the let variable cannot be accessed outside the block, only inside of the block.
    
    CONST : 
        -Variables declared with const can neither be redeclared nor be reassigned without any issue.
        -Variables declared with const have a block scope if declared inside a block.
        -Variables declared with const have a functional scope if declared inside a function.
        -Variables declared with const have a global scope for the same file not all, if declared outside a function and a block.


        */