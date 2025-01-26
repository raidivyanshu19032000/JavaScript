const coding = ["js", "ruby", "java" ,"puthon", "cpp", "c#"]

const value = coding.forEach((item) => {
    // console.log(item);
    // return item;
})
// console.log(value);

// filters 

const myNums = [1,2,3,4,5,6,7,8,9,10]; 

// const newNums = myNums.filter((num)=> {
//     return num > 4;
// })

// Same thing can do with foreach
const newNum = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNum.push(num);
    }
})
console.log(newNum);



// Filters