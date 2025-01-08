const name = "Divyanshu"; 
const repoCount = 25; 

// console.log(name + repoCount + " Users");

// console.log(`Hello my name is ${name} and my repo count is : ${repoCount}`); 

const gameName = new String("Divyanshu-dev-ops")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'))

const  newString = gameName.substring(0, 5)
// console.log(newString);

const  newString1 = gameName.slice(-9, 5)
// console.log(newString1);

const newStringOne = `    Hi, Mrs ${name}`
// console.log(newStringOne);
console.log(newStringOne.trim()); // Basically trim will remove the white spaces from entierly and we've also available methods to remove the whitespaces from start and end;

const url = "https://divyanshu.com/divyanshu%20rai"

console.log(url.replace("%20", "-"));

console.log(url.includes('hey'));
console.log(gameName.split('-'));







// Note => Difference between splice and slice 
// => splice will not entertain the negative value while slice will entertain the negative value and take the indexing from last of the given string 


