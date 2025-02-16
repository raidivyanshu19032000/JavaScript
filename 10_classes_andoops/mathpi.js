// How to change a global constant value in js ; 

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);


// const chai = {
//     name: 'ginger chai',
//     price: 250, 
//     isAvailable : false
// }

// console.log(chai)   
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, 'name', {
//     // writable: false, 
//     enumerable: true
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (const [key, value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//         console.log(`${key}: ${value}`);
//     }
// }

// const math = Math.PI;
// Object.defineProperty(Math, "PI", {
//     writable: true,  // Allow modification
//     configurable: true,  // Allow the property to be reconfigured (deleted or changed again)
//     enumerable: true  // Make it show up in loops (optional)
// }) 


Object.defineProperty(Math, "PI", {
    writable: true,  // Allow modification
    configurable: true,  // Allow the property to be reconfigured (deleted or changed again)
    enumerable: true  // Make it show up in loops (optional)
  });
  
  let myMath = Math.PI;  // Save the current value of Math.PI into myMath
  myMath = 5;  // Assign 5 to myMath
  console.log(myMath);  // Output: 5
  