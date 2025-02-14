const promiseOne = new Promise(function (resolve, Reject){
    // Do an asyn task
    // Db calls, cryptography, network 

    setTimeout(function(){
        // console.log("Asyn task is completed");
        resolve();
    }, 1000)
});

promiseOne.then(function (){
    // console.log("Promise consumed")
})

// 2nd promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("Asyn task 2");
        resolve()
    }, 2000)
}).then(function(){
    // console.log("Asyn task 2 resolved");
})

// 3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName:'chai', password: 'chaiAurCode@gmail.com'})
    }, 1000);
});

promiseThree.then(function (user){
    console.log(user);
    
})

const prmoiseFour = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName: 'Divyanshu', password: 'pass@123456'})
        }
        else{
            reject('Something went wrong!');
        }
    }, 1000);
})

prmoiseFour.then((user)=> {
    console.log(user.userName);
    return user.userName;
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The promsis is either resolved or rejected'));


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"javaScipt", password:123 })
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
});


async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data)=> {
    console.log(data);
}).catch((error) => console.log(error));