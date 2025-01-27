
const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc, curValue) {

//     // console.log(acc);
//     return acc + curValue;
// }, 0)

const myTotal = myNums.reduce((acc, curValue) => acc+curValue, 0 )
// console.log(myTotal);

const shoppingCart = [
    {
        course: "Js course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "Data scientist course",
        price: 12999
    },
    {
        course: "Mobile app course",
        price: 10999
    },
    {
        course: "Ios dev course",
        price: 122999
    },
]

const finalAmount = shoppingCart.reduce ((acc, itemPrice) => acc + itemPrice.price, 0)
console.log(finalAmount);


// Reduce in js (use of reduce)
