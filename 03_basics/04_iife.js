// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})("Divyanshu")