// ES6

class user {
    constructor(username,email,password){
          this.username  = username
          this.email = email
          this.password = password
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUserName (){
        return `${this.username.toUpperCase()}`
    }
}

const rayhan = new user('rayhan','rmd09181@mail.com',1254)

console.log(rayhan.encryptPassword());
console.log(rayhan.changeUserName());

// behind the scene

function User (username,email,password){
   this.username = username
   this.email = email
   this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

const rifat = new User('rifat','mdiyer87@g,mail.com',1235)

console.log(rifat.encryptPassword());

