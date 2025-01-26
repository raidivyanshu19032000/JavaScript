// for of 

// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);   
}

const greeting = "Hello world"; 
for (const greet of greeting) {
    // console.log(`Each char of greeting: ${greet}`);
}

// Maps 

const map = new Map(); 
map.set('In', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

const myObject = {
    'game1': "NFS", 
    'game2': "Spiderman"
}

// this will not work for object iteration
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
    
// }