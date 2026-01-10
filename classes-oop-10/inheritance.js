class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Logged me ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`course has been add by ${this.username}`);
        
    }
}

const member = new Teacher("sifat","dhtf@gmail.com",2597);

member.addcourse()
console.log(member);


console.log(member instanceof User );
console.log(member instanceof Teacher );



