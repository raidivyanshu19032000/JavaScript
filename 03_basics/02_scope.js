let a = 100; 
// console.log(a);

var c = 300

if(true){
    let a = 10 ;
    const b = 20 ;
    var c = 30;
    // console.log(`Inside block ${a}`);
    // console.log("Inside:", a);
    
}

// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const userName = "Divyanshu"; 
    function two(){
        let webSites = "youtube";
        console.log(userName);
    }
    // console.log(webSites);
    

    // two(); 
}

// one();

if(true){
    let userName = "Rahul"; 
    if (userName === "Rahul") {
        let webSites = " youtube"; 
        // console.log(userName + webSites)
    }
    // console.log(webSites);
}
// console.log(userName);


console.log(addOne(5));

function addOne(num){
    return num + 1; 
}


console.log(addTwo(12));
const addTwo = function(num){
    return num + 2;
}