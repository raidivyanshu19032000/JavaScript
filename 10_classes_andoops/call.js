function SetUserName(userName){
    // Complex DB Calls 
    this.userName = userName
    console.log("Called")
}

function createUser(userName, email, password){
    SetUserName.call(this,userName)

    this.email = email;
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', 1235); 
console.log(chai)