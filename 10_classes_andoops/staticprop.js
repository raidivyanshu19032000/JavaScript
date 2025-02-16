class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName: ${this.userName}`)
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User('histesh');
// console.log( hitesh.createId())

class Teacher extends User{
    constructor (userName, email){
        super(userName);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
console.log(iphone.createId());