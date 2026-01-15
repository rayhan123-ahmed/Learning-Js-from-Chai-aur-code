class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static creatId(){
        return 123
    }
}

const rifat = new User("rayhan")

console.log(rifat);
rifat.logMe()

// To access the static method you've to tale help by a class name 
console.log(User.creatId())

class Teacher extends User  {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const member = new Teacher('ahmed',"md08472mail.com")

console.log(member);
console.log(member.creatId());


