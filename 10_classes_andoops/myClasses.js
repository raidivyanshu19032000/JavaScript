class User {
    constructor(userName, email, password){
        this.userName = userName, 
        this.email = email, 
        this.password = password
    }

    encryptedPassword(){
        return `${this.password}abc`
    }
}

const user = new User('chai', 'chai@fb.com', '123456'); 
console.log(user);