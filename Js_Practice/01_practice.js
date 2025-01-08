// Write a function that takes two objects and returns a new object with combined key-value pairs. If the same key exists in both objects, the value from the second object should overwrite the first.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

function mergeObjects(obj1, obj2){
    for(let key in obj2){
        obj1[key] = obj2[key]
    }
    return obj1;
}
const mergedResult = mergeObjects(obj1, obj2); 
console.log(mergedResult);



// Using spread operator : 
function mergeObjects1(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const mergedResult2 = mergeObjects1(obj1, obj2);
console.log(mergedResult2);


// Using the Object.assign() 
function mergeObjects3(obj1, obj2){
    return Object.assign(obj1, obj2);
}
const mergedResult3 = mergeObjects1(obj1, obj2);
console.log(mergedResult3);



// Shallow Copy and Deep copy :
  /* Shallow Copy: 
    A shallow copy is a copy that only goes one level deep. In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object. It means that if you make changes to the nested object, it will also affect the original object, as well as the copied object.
    example: 
        const originalObject = { a: 1, b: { c: 2 } };  
        const shallowCopy = { ...originalObject };  
        shallowCopy.a = 3; // Changes shallowCopy, but not originalObject  
        shallowCopy.b.c = 4; // Changes both shallowCopy and originalObject  

  Deep Copy : 
    A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect the original object.
    example:
    Here is an example of deep copying an object using the JSON.parse() and JSON.stringify() methods:

    const originalObject = { a: 1, b: { c: 2 } };  
    const deepCopy = JSON.parse(JSON.stringify(originalObject));  
    deepCopy.a = 3; // Changes deepCopy, but not originalObject  
    deepCopy.b.c = 4; // Changes deepCopy, but not originalObject  
*/

// Spread operator : 

