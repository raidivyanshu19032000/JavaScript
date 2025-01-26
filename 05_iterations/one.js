// for loop
   

// for(let index = 0 ; index < 10 ; index ++ ){
//     const  element = index;
//     if(element == 5 ){
//         console.log(`${element} is the best value`);
        
//     }
//     console.log(element);
    
// }                       


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is : ${i}`);
    for (let j =1; j <= 10; j++){
        // console.log(`Inner loop value i ${j} and inner lopp ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
        
    }
}

let myArray = ["Flash","Batman", "Batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
   if( index == 5){
    // console.log(`Detected 5`);
    //  break;
    // continue;
   }
    // console.log(`value of i is : ${index}`);
}