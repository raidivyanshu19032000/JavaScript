
/* To store the data in memory and get accessed based on that data Types are categoried into two parts : 
     1.Primitive 
        7 types : String, Number, Boolean, null, undefined, Symbol(to make the value unique), BigInt */
        const score = "100"; 
        const scoreValue = 100; 
        const isLoggedIn = false; 
        const outSideTemp = null; 
        let userEmail ; 

        const newId = Symbol(123)
        const id = Symbol(123)
        // console.log(newId === id);

        const bigNumber = 123465498797n;
        
        
    /* 2.Non-Primitive or Reference type : 
        Array, Objects, Funtions
    */
        const heros = ["shatiman", "naagraj", "doga"];
       let myObj =  {
            name: "Divyanshu", 
            age: 25
        }

        const myFunction = function(){
            console.log("Hello world");
            
        }

        // console.log(typeof(outSideTemp));



// ========================================================================

        // Stack (Primitive), Heap(Non-Primitive)

        let myName = "Divyanshu Rai";
        let myFriendName = myName; 
        myFriendName = "Nikhil kuamar singh"; 

        // console.log(myName);
        // console.log(myFriendName);
        
        let userOne = {
            email: "user@google.com", 
            upi: "user@ybl"
        }

        let userTwo = userOne; 

        userTwo.email = "Divyanshu@yahoo.com"; 

        console.log(userOne.email); 
        console.log(userTwo.email);

    // Notes : In stack we will the copy of the value while in Heap we will get the refrence of the value.
        