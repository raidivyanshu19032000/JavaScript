const promiseOne = new Promise(function (resolve, Reject){
    // Do an asyn task
    // Db calls, cryptography, network 

    setTimeout(function(){
        console.log("Asyn task is completed");
        resolve();
    }, 1000)
});

promiseOne.then(function (){
    console.log("Promise consumed")
})

// 2nd promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Asyn task 2");
        resolve()
    }, 2000)
}).then(function(){
    console.log("Asyn task 2 resolved");
})

// 3rd promise