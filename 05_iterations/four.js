const myObject = {
    js: 'javascirpt', 
    cpp : 'C++', 
    rb: 'ruby', 
    swift: 'swift by app'
}

// for in for object iteration
for (const key in myObject) {
    // console.log(key); only for key 
    // console.log(`${key} shortcut is for: ${myObject[key]}`);
}

const programming = ["cpp", "js", "rb", "py", "java","c"];

for (const prog in programming) {
    console.log(programming[prog]);
    
}