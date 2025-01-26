const coding = ["js", "ruby", "java" ,"puthon", "cpp", "c#"]

coding.forEach(function(item){
    // console.log(item);
    
}) 

// coding.forEach((item)=> {console.log(item)})

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);


coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascirpt", 
        languageFileName: "js"
    },
    {
        languageName: "Csharp", 
        languageFileName: "c#"
    },
    {
        languageName: "Python", 
        languageFileName: "py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})


// Loop (for, while, do-while, map, for in, for of, foreach)