// Transform Array of Objects
// Given an array of objects, return an object where keys are derived from one of the object properties, and values are arrays of objects.
// Example: Convert [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] into { 1: { name: 'A' }, 2: { name: 'B' } }.


let arr1 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

// Using of for loop;
function transformOfArray(arr){
    let obj = {}; 
    for(const element of arr){
        obj[element.id] = {name: element.name}
    }
    return obj;
}

var output1 = transformOfArray(arr1); 
console.log(output1);

// using Array.prototype.reduce()

// function transformOfArrayUsingReduce(arr){
//     return arr.reduce((acc, result)=>{
//         acc[result.id] = {name: result.name}
//     });
// }

// var output2 = transformOfArrayUsingReduce(arr1); 
// console.log(output2);


function transformArrayOfObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = { name: item.name };
        return acc;
    }, {});
}

console.log(transformArrayOfObject1(arr1)); 