// Array 
//JavaScript arrays are resizable and can contain a mix of different data type
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript array-copy operations create shallow copies. 

const myArr = [0,1,2,3,4,50]
const myHeors = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(11,22,33,44,55)
// console.log(myArr[2]);


//      Array methods : 

// myArr2.push(66)
// myArr2.pop()
// myArr2.unshift(9)
// myArr2.shift()
//  console.log(myArr2);


// console.log(myArr2.includes(55))
// console.log(myArr2.indexOf(55))


const myNewArray = myArr2.join()

// console.log(myArr2)
// console.log(typeof myNewArray)

// ================

console.log("A", myArr)

// const myn1 = myArr.slice(1,2)
// console.log(myn1)
// console.log("B", myArr);


const myn2 = myArr.splice(1,2)
console.log(myn2);
console.log(myArr);


// Slice will not contain the last index and it will not modify the orginal array 
// Splice will contain the last index and it will also modify the orginal array